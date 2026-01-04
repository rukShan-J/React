import React from "react";

const SearchBar = () => {

    const searchHandler = (event) => {
        console.log("Searching for:", event.target.value);
    }
    
  return (
    <div className="form-wrapper">
      <input type="text" id="search" placeholder="Search for..." onChange={searchHandler}/>
    </div>
  );
};

export default SearchBar;
