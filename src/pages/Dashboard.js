import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2";
import data from "../../utils/API";

class Dashboard extends Component {

    state = {
        data
      };
    
    
    
    render() {
        console.log(this.state.data);
        return (

            <div className = "chart" style = {{postion: "relative", width: 600, height: 550}}>
                <h3>Chart Component</h3> 
                <Line 
                  options = {{
                    responsive: true
                  }}
                  data = {this.state.data}
                />
            </div>

        );
    }

}

export default Dashboard;






































































// import React, { Component } from "react";
// import SearchForm from "../components/SearchForm";
// import ResultList from "../components/ResultList";
// import API from "../utils/API";

// class Dashboard extends Component {
//   state = {
//     search: "usa",
//     results: []
//   };

  
//   componentDidMount() {
//     this.searchByCountry(this.search);
//   }

//   searchByCountry = query => {
//     API.search(query)
//       .then(res => this.setState({ results: res.data.response }))//??
//       // .then(res => this.setState({ results: res.response }))
//       //.then(res => console.log(res.data.response[0].cases))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, search the Civid API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchByCountry(this.state.search);
//   };

//   render() {
//     return (
//       <div>
        
//           <SearchForm
//             search={this.state.search}
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//           />
//           <ResultList results={this.state.results} />
//       </div>
//     );
//   }
// }

// export default Dashboard;
