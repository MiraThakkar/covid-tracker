const axios = require("axios");
export default {
  search: function (query) {
    return axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        //"url":"https://covid-193.p.rapidapi.com/countries",
        // "url":"https://covid-193.p.rapidapi.com/countries",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"65540442ebmsh5825c6f7e1a9604p139457jsn2008a79824c1"
        },
        "params":
        { 
        "country":query}
        })
        .then((response)=>{
          // console.log(response);
          return response;
        })
        .catch((error)=>{
          console.log(error)
        })
  },
/////////////////////////////////  
searchState: function (query, date) {
return axios({

  "method":"GET",

  "url":"https://covid-19-statistics.p.rapidapi.com/reports",

  "headers":{

  "content-type":"application/octet-stream",

  "x-rapidapi-host":"covid-19-statistics.p.rapidapi.com",

  "x-rapidapi-key":"65540442ebmsh5825c6f7e1a9604p139457jsn2008a79824c1"

  },"params":{

  "region_province":query,

  "iso":"USA",

  "region_name":"US",

  "date": date,//"2020-04-21",

  "q":"USA " + query

  }

  })

  .then(response=>{

    //console.log(response)
    //console.log(cities)
    return response.data.data[0];

  })

  .catch((error)=>{

    console.log(error)

  })
},
///////////////////////////////
searchStats: function (date, query) {
  return axios({
      "method":"GET",
      "url":"https://covid-193.p.rapidapi.com/history",
      //"url":"https://covid-193.p.rapidapi.com/countries",
      // "url":"https://covid-193.p.rapidapi.com/countries",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-193.p.rapidapi.com",
      "x-rapidapi-key":"65540442ebmsh5825c6f7e1a9604p139457jsn2008a79824c1"
      },
      "params":
        
        { 
          
          "day": date,
          "country":query
        }
      })
      .then((response)=>{
        // console.log(response);
        return response;
      })
      .catch((error)=>{
        console.log(error)
      })
    },
};
  // export default search;
