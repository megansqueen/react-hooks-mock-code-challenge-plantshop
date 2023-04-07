import React, { useState } from "react";

function Search({ onSearch }) {
  const[search, setSearch] = useState("")

  function handleOnSearch(e) {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <form className="searchbar">
      <label htmlFor="search">Search Plants:</label>
          <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleOnSearch}type="submit">🔍</button>
    </form>
  );
}

export default Search;
