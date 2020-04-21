import axios from "axios";

// Export an object containing methods we'll use for accessing API

export default {
  Data: function() {

    axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"2eb144d7f0msh71deafc40feda88p155f8bjsn974e3093c435"
        },
        "params":{
            "country":"India"
        }

        })
        .then((response)=>{
          console.log(response);
        })
        .catch((error)=>{
          console.log(error)
        })

  }
};
