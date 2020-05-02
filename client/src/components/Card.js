import React from "react";

function Card (prop){
    const styles = { card: {width: "18rem"}}
    return (
        <div>
            <div class="card" style = {styles.card}>
            {/* <div class="card text-center"> */}
            <div class="card-header">
                {prop.tittle}
            </div>
            <div class="card-body">
                <h5 class="card-title">COVID-19</h5>
                <ul class="list-group list-group-flush">
                {/* <ul class="card-text"> */}
                    <li className="list-group-item">New cases: {prop.newCases}</li>
                    <li className="list-group-item">Active Cases: {prop.activeCases}</li>
                    <li className="list-group-item">Recovered cases: {prop.recoveredCases}</li>
                    <li className="list-group-item">Total Cases: {prop.totalCases}</li>
                    <li className="list-group-item"> New Deaths: {prop.newDeaths}</li>
                    <li className="list-group-item">Total Death: {prop.totalDeaths}</li>
                </ul>
            </div>
            <div class="card-footer text-muted">
                {prop.date}
            </div>
            </div>
        </div>
    );
}
export default Card;

            
