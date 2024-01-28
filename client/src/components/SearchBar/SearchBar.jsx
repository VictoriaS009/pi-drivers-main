import { useState } from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../assets/images/Search-icon.png";

const SearchBar = ({ onSearch }) => {
  const [searchDriver, setSearchDriver] = useState("");

  const handleInputChange = (e) => {
    setSearchDriver(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchDriver);
    setSearchDriver("");
  };

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
          type="text"
          placeholder="Search by driver name"
          value={searchDriver}
          onChange={handleInputChange}
          className={style.input}
        />
        <img
          src={searchIcon}
          alt="search-icon"
          onClick={handleSearch}
          className={style.img}
        />
      </div>
    </div>
  );
};

export default SearchBar;
