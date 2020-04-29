import React from "react";

function usaForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a state in USA"
          id="search"
        />
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="date"
          type="text"
          className="form-control"
          placeholder="date"
          id="state"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default usaForm;