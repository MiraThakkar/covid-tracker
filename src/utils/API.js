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
        console.log(response);
        return response;
      })
      .catch((error)=>{
        console.log(error)
      })
  }
};
  // export default search;
