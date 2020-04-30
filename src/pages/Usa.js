import React, { Component } from 'react';
// import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import API from "../utils/API";
 
class Map extends Component {

  state = {
        stateName: "",
        date: "",
        results: []
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
  /* mandatory */
    mapHandler = (event) => {
      alert(event.target.dataset.name);
    };
 
  /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
      return {
        "CT": {
          fill: "navy",
          clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
        },
        "CT": {
          fill: "#CC0000"
        }
      };
    };
 
  render() {
    return (
      <div className= "container" style= {{padding: "20px 20px"}}>
        <form>
         <input
            onChange={this.handleInputChange}
            value={this.state.stateName}
            name="stateName"
            type="text"
            className="form-control"
            placeholder="Search for a state in USA"
            id="state"
          />
          <input
            onChange={this.handleInputChange}
            value={this.state.date}
            name="date"
            type="date"
            className="form-control"
            placeholder="date"
            id="date"
          />
          <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
            Search
          </button>
        
        </form>

        <div className = "map">
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
        
      </div>
    );
  }
}
 
export default Map;

























// import React from "react";

// //import React, { Component } from "react";
// //import SearchForm from "../SearchForm"
// import Map from "../components/Map";
// import API from "../utils/API";

// class usaForm extends React.Component {
//   state = {
//     stateName: "",
//     date: "",
//     results: []
//   };
//   // componentDidMount() {
//   //   this.searchByCountry(this.search);
//   // }

//   searchByState = (query, searchDate) => {
//     //console.log(query)
//     console.log(query);
//     console.log(searchDate);
//     API.searchState(query, searchDate)
//       // .then(res => this.setState({ results: res.data.response }))//??
//       // // .then(res => this.setState({ results: res.response }))
//       .then(res => console.log(res))
//       //.catch(err => console.log(err));
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
//     console.log(this.state.stateName);
//     console.log(this.state.date);
//     this.searchByState(this.state.stateName, this.state.date);
//   };

// //   render() {
// //     return (
// //       <div>
        
// //           <SearchForm
// //             search={this.state.search}
// //             handleFormSubmit={this.handleFormSubmit}
// //             handleInputChange={this.handleInputChange}
// //           />
// //           <ResultList results={this.state.results} />
// //       </div>
// //     );
// //   }
// // }



// //
//   render() {
//     return (
//       <div className= "container" style= {{padding: "20px 20px"}}>
//       <form>
//         <div className="form-group">
//           <label htmlFor="stateName">Search by State:</label>
//           <input
//             onChange={this.handleInputChange}
//             value={this.state.stateName}
//             name="stateName"
//             type="text"
//             className="form-control"
//             placeholder="Search for a state in USA"
//             id="state"
//           />
//           <input
//             onChange={this.handleInputChange}
//             value={this.state.date}
//             name="date"
//             type="date"
//             className="form-control"
//             placeholder="date"
//             id="date"
//           />
//           <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
//             Search
//           </button>
//         </div>
//       </form>


//     </div>
//     );
//   }
// }


// export default usaForm;