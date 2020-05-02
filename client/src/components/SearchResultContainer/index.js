import React, { Component } from "react";
import SearchForm from "../SearchForm"
import ResultList from "../ResultList";
import API from "../../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "usa",
    results: []
  };

  
  componentDidMount() {
    this.searchByCountry(this.search);
  }

  searchByCountry = query => {
    API.search(query)
      // .then(res => this.setState({ results: res.data.response }))//??
      // // .then(res => this.setState({ results: res.response }))
      .then(res => console.log(res.data.response[0].cases))
      .catch(err => console.log(err));
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
    this.searchByCountry(this.state.search);
  };

  render() {
    return (
      <div>
        
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
