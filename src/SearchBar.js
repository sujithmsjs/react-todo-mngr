import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    console.info("Inside SearchBar ", value);
    if (value.length > -1) onSearch(value);
  };

  return (
    <div>
      <h4>Search bar</h4>
      <input type="text" onChange={handleChange} className="form-control" />
    </div>
  );
};

export default SearchBar;
