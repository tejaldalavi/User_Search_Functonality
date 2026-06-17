function SearchBar({ search, setSearch }) {
  console.log("SearchBar Rendered");

  return (
    <input
      type="text"
      placeholder="Search employee..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;