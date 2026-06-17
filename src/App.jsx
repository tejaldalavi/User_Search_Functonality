import { useMemo, useState } from 'react'
import { employees } from "./data/employees";
import useDebounce from './useDebounce';
import SearchBar from './SearchBar';
import Filters from './Filters';

function App() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [sortBy, setSortBy] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const filteredEmployees = useMemo(() => {
    // console.log("Filtering Employees");

    let result = employees.filter((employee) => {
      const searchMatch =
        employee.name
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()) ||
        employee.city
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()) ||
        employee.department
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());

      const departmentMatch =
        department === "" ||
        employee.department === department;

      const cityMatch =
        city === "" ||
        employee.city === city;

      return (
        searchMatch &&
        departmentMatch &&
        cityMatch
      );
    });

    if (sortBy === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortBy === "ageAsc") {
      result.sort(
        (a, b) => a.age - b.age
      );
    }

    if (sortBy === "ageDesc") {
      result.sort(
        (a, b) => b.age - a.age
      );
    }

    return result;
  }, [
    debouncedSearch,
    department,
    city,
    sortBy,
  ]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <h1>Employee Search</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filters
        department={department}
        setDepartment={setDepartment}
        city={city}
        setCity={setCity}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <h3>
        Total Results:
        {" "}
        {filteredEmployees.length}
      </h3>

      {filteredEmployees.map((employee) => (
        <div
          key={employee.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{employee.name}</h3>

          <p>
            Age:
            {" "}
            {employee.age}
          </p>

          <p>
            City:
            {" "}
            {employee.city}
          </p>

          <p>
            Department:
            {" "}
            {employee.department}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
