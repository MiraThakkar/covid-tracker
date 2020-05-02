import React from "react";

function Card (prop){
    const styles = { card: {width: "14rem"}}
    return (
        <div>
            <div className="card" style = {styles.card}>
            <div className="card-header">
                {prop.title}
            </div>
            <div className="card-body">
                    <p>Total Cases: {prop.confirmed}</p>
                    <p>Active Cases: {prop.active}</p>
                    <p>Recovered cases: {prop.recovered}</p>
                    <p>Total Death: {prop.deaths}</p>
                
            </div>
            {/* <div class="card-footer text-muted">
                {prop.date}
            </div> */}
            </div>
        </div>
    );
}
export default Card;

            
