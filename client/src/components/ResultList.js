import React from "react";
import Card from "./Card";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <div className="list-group-item" key={result.id}>
          {/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */}
          <Card 
            tittle = {result.country}
            date = {result.day}
            newCases = {result.cases.new}
            activeCases = {result.cases.active}
            recoveredCases = {result.cases.recovered}
            totalCases = {result.cases.total}
            newDeaths = {result.deaths.new}
            totalDeaths = {result.deaths.total}
          />
          {/* // {result.cases.total} */}
        </div>
      ))}
    </ul>
  );
}

export default ResultList;
