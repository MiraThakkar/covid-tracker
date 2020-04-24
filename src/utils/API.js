//import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
//import React from "react";
const axios = require("axios");
export default {
  search: function (query) {
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
        "params":{ "day":"2020-04-20",
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

  stats: function () {
    return axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        //"url":"https://covid-193.p.rapidapi.com/countries",
        // "url":"https://covid-193.p.rapidapi.com/countries",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"65540442ebmsh5825c6f7e1a9604p139457jsn2008a79824c1"
        }
        })
        .then((response)=>{
          // console.log(response);
          return response;
        })
        .catch((error)=>{
          console.log(error)
        })
    }
};
  // export default search;
