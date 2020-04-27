import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import API from "../utils/API";
import Widget from "../components/Widget";
import { Container, Row, Col } from "../components/Grid";

class Dashboard extends Component {
  state = {
    search: "usa",
    results: []
  };

  
  componentDidMount() {
    this.searchByCountry(this.search);
  }

  searchByCountry = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.response }))//??
      // .then(res => this.setState({ results: res.response }))
      //.then(res => console.log(res.data.response[0].cases))
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
        <Container fluid>
          <Row>
            <Col size = "md-4">
                <SearchForm
                  search={this.state.search}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </Col>
      
            <Col size = "md-4">
              <Widget/>
           </Col>

           <Col size = "md-4">
              <Widget/>
           </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Dashboard;
