import React, { useState, useEffect } from "react";

function Search() {
  const list = ["Go to the store", "Wash the dishes", "Learn some code"];
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState({
    filtered: []
  });

  useEffect(() => {
    handleChange(searchValue);
  }, [searchValue]);

  function handleChange(value) {
    let currentList = [];
    let newList = [];

    if (value !== "") {
      currentList = list.filter(e =>
        e.toLowerCase().includes(value.toLowerCase())
      );

      newList = currentList;
    } else {
      newList = list;
    }
    setState({
      filtered: newList
    });
  }

  return (
    <div>
      <input
        type="text"
        className="input"
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Search..."
      />

      <ul>
        {state.filtered.map(item => (
          <li key={item}>{item} &nbsp;</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
