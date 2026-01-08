import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({onSearch}) => {

    const searchHandle = (event) => {
        // console.log("Searching for:", event.target.value);
        onSearch(event); // or event.target.value
    };
    
  return (
    <div className="form-container">
      <form className="form-wrapper">
        <input 
          type="text" 
          id="search" 
          placeholder="Search for..." 
          onChange={searchHandle}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
