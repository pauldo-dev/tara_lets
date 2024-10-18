import React from "react";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import "../../sass/Components.scss";

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: "Search...",
  onSearch: null,
};

export default SearchBar;
