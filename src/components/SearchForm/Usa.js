import React from "react";
import API from "../../utils/API";
//import dropDown from  "../../utils/Droplist";

class usaForm extends React.Component {
  state = {
    stateName: "",
    date: "",
    results: [],
    drop: "",

    list: [
      "Alabama","Alaska","American Samoa","Arizona","Arkansas","California",
      "Colorado","Connecticut","Delaware","District Of Columbia","Federated States Of Micronesia",
      "Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
      "Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan",
      "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
      "New Jersey","New Mexico","New York","North Carolina",
      "North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania",
      "Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah",
      "Vermont","Virgin Islands","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
  ]
  };
  // componentDidMount() {
  //   this.searchByCountry(this.search);
  // }

  searchByState = (query, searchDate) => {
    //console.log(query)
    console.log(query);
    console.log(searchDate);
    API.searchState(query, searchDate)
      // .then(res => this.setState({ results: res.data.response }))//??
      // // .then(res => this.setState({ results: res.response }))
      .then(res => console.log(res))
      //.catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Civid API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.stateName);
    console.log(this.state.date);
    this.searchByState(this.state.stateName, this.state.date);
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="stateName">Search by State:</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.stateName}
            name="stateName"
            type="text"
            className="form-control"
            placeholder="Search for a state in USA"
            id="state"
          />
          {/* <select className="custom-select"
          // name = "drop"
          // value = {this.state.drop} 
                                            
          >
            <option selected>Select a State</option>
            <option name = "drop" value={this.state.drop} onSelect = {this.handleInputChange}>New Jersey</option>
            <option name = "drop" value={this.state.drop} onSelect = {this.handleInputChange}>New York</option>
            <option name = "drop" value={this.state.drop} onSelect = {this.handleInputChange}>Connecticut</option>
          </select> */}

          {/* <dropDown /> */}
          <input
            onChange={this.handleInputChange}
            value={this.state.date}
            name="date"
            type="date"
            className="form-control"
            placeholder="date"
            id="date"
          />
          {/* <dropDown /> */}
          <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
  }
}


export default usaForm;