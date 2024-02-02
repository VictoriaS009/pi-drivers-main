import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriverByName } from "../../redux/actions";
//import "./SearchBar"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(getDriverByName(searchTerm));
    }
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #000',
    backgroundColor: '#fff',
    color: '#000',
    width : '450px',    

  };
  const inputContainer = {
display : 'flex',   
gap : '20px',
flexDirection : 'row',
  };
  const button = {
    width : '150px',
    borderRadius: '10px',
    border: '1px solid #000',
    backgroundColor: '#555',
    color: '#fff',
  };

  return (
    <div style={inputContainer} className="search-bar">
      <input style={inputStyle}
        type="text"
        placeholder="Search by forename or surname"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={button}>Search</button>
    </div>
  );
};

export default SearchBar;

