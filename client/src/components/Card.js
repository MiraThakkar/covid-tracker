import React from "react";
import axios from "axios";

function Card (prop){

    function handleButtonClick (event){
        const favState= (prop.title);
        alert(favState);
        return axios.post('/api/favorites', favState)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
        
      };
        


    const styles = { card: {width: "16rem"}}
    return (
        <div>
            <div className="card card-state" style = {styles.card}>
            <div className="card-header" >
                {prop.title}
            </div>
            <div className="card-body">
                    <p>Total Cases: {prop.confirmed}</p>
                    <p>Active Cases: {prop.active}</p>
                    <p>Recovered cases: {prop.recovered}</p>
                    <p>Total Death: {prop.deaths}</p>
                    <button 
                    className = "btn btn-info mt-3"
                    onClick = {handleButtonClick}
                    ><i className="fas fa-plus"></i>  Add to Favorite
                    </button>
                
            </div>
            
            </div>
        </div>
    );
}
export default Card;

            
