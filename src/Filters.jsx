function Filters({
    department,
    setDepartment,
    city,
    setCity,
    sortBy,
    setSortBy,
}) {
    return (
        <div>
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
            </select>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">All Cities</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
            </select>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">
                    Sort By
                </option>
                <option value="name">
                    Name A-Z
                </option>
                <option value="ageAsc">
                    Age Asc
                </option>
                <option value="ageDesc">
                    Age Desc
                </option>
            </select>
        </div>
    );
}

export default Filters;