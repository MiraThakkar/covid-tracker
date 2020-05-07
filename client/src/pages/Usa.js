// import React from 'react';
import React, { useState, useEffect } from "react";
// import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
// import { Line, Doughnut, Bar } from 'react-chartjs-2';
import API from "../utils/API";
import Navbar from "../components/Navbar";
import SubMenu from "../components/SubMenu";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Moment from "moment";
 
const states = {'Alabama':'AL',
'Alaska':'AK',
'Arizona':'AZ',
'Arkansas':'AR',
'California':'CA',
'Colorado':'CO',
'Connecticut':'CT',
'Delaware':'DE',
'Florida':'FL',
'Georgia':'GA',
'Hawaii':'HI',
'Idaho':'ID',
'Illinois':'IL',
'Indiana':'IN',
'Iowa':'IA',
'Kansas':'KS',
'Kentucky':'KY',
'Louisiana':'LA',
'Maine':'ME',
'Maryland':'MD',
'Massachusetts':'MA',
'Michigan':'MI',
'Minnesota':'MN',
'Mississippi':'MS',
'Missouri':'MO',
'Montana':'MT',
'Nebraska':'NE',
'Nevada':'NV',
'New Hampshire':'NH',
'New Jersey':'NJ',
'New Mexico':'NM',
'New York':'NY',
'North Carolina':'NC',
'North Dakota':'ND',
'Ohio':'OH',
'Oklahoma':'OK',
'Oregon':'OR',
'Pennsylvania':'PA',
'Rhode Island':'RI',
'South Carolina':'SC',
'South Dakota':'SD',
'Tennessee':'TN',
'Texas':'TX',
'Utah':'UT',
'Vermont':'VT',
'Virginia':'VA',
'Washington':'WA',
'West Virginia':'WV',
'Wisconsin':'WI',
'Wyoming':'WY'
};
function Map (){

  const [state, setState] = useState("");
  const [date, setDate] = useState("");
 const [result, setResult] = useState({});


 //on page load page displays connecticut's latest covid data

 useEffect(() => { 
   let state = "Connecticut";
   let date = Moment(new Date()).subtract(1, "days").format("YYYY-MM-DD");
   searchByState(state, date);
   
  },[]);



  
  function getKeyByValue (object, value)  { 
    return Object.keys(object).find(key => object[key] === value);
    
   }
  

  function searchByState (query, searchDate) {
    //console.log(query)
    console.log(query);
    console.log(searchDate);
    if(query && searchDate){
      API.searchState(query, searchDate)
      .then(
        res => {
          console.log(res);
          setResult(res);
          console.log(result);
        }

      ).catch(err => console.log(err));
    
    }else {

      setResult(result);

    }
  
    
  };

  // Handles updating component state when the user types/selects the date input field

 function handleInputChange (event) {
    // const name = event.target.name;
    const value = event.target.value;
    setDate(
       value
    );
  };
    
  /* mandatory */
  async function mapHandler (event) {
      const value = await getKeyByValue (states, event.target.dataset.name);
       setState(value);
      console.log(state);
      // alert(this.state.stateName);
      searchByState(value, date);
      
    };
 
  /* optional customization of filling per state and calling custom callbacks per state */
   function statesCustomConfig () {
  
      return {
        
        "CT": {
          fill: "navy"
          //clickHandler: (event) => console.log('Custom handler for CT', event.target.dataset)
          
        },
        "NY": {
          fill: "#db1515"
        },
        "FL": {
          fill: "black",
          clickHandler: (event) => console.log('Custom handler for CT', event.target.dataset)
        }
      };  
    };                                                                            
 
    return (
      
    <div>
      <Container fluid>
          <Row>
            <Col size="md-2">
              <SubMenu />
            </Col>
            <Col size ="md-10 lg-10">
              <Navbar />
              <div className= "container col-lg-10" style= {{padding: "20px 20px"}}> 
                <input
                    onChange={handleInputChange}
                    value={date}
                    name="date"
                    type="date"
                    className="form-control"
                    placeholder="date"
                    id="date"
                    required
                />
    -           <Row>
                  <Col size ="md-10">
                    <USAMap onClick={mapHandler} customize = {statesCustomConfig()}/>
                  </Col>

                  <Col size="md-2">
                    {result.region && 
                    <Card 
                        title = {result.region.province}
                        // date = {result.date}
                        active = {result.active}
                        recovered = {result.recovered}
                        confirmed = {result.confirmed}
                        deaths = {result.deaths}
                        className = "stateCard"
                    >
                    </Card>}
                  </Col>
              </Row>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
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
