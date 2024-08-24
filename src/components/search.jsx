import { CiSearch } from "react-icons/ci";
import React from "react";

function Search({ onChange }) {
  return (
    <label className="search">
      <CiSearch className="search__icon" />
      <input type="text" onChange={onChange} className="search__input" />
    </label>
  );
}

export default Search;
