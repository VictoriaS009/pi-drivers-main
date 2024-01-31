import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriverByName } from "../../redux/actions";
import "./SearchBar"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(getDriverByName(searchTerm));
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a driver by its forename or surname"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

