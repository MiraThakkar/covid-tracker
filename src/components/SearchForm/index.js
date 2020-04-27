import React from "react";
import "./style.css";


function SearchForm(props) {
  return (
    <form>
      <div className="form-group"> 
        <span onClick={props.handleFormSubmit} className="searchBtn">
          <i class="fa fa-search" />
        </span>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a country"
          id="search"
        />
        
        
        
      </div>
    </form>
  );
}

export default SearchForm;
