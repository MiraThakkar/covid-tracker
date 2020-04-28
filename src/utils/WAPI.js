const axios = require("axios");

//const axios = require("axios");
export default {
search: function (query) {
  return axios({
    "method":"GET",
    "url":"https://covid-19-tracking.p.rapidapi.com/v1/usa",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-tracking.p.rapidapi.com",
    "x-rapidapi-key":"65540442ebmsh5825c6f7e1a9604p139457jsn2008a79824c1"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
}
};