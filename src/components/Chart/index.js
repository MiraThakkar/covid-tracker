import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2";
import data from "../../utils/API";

class Chart extends Component {

    state = {
        data
      };
    
    
    
    render() {
        console.log(this.state.data);
        return (

            <div className = "chart">
                Chart Component  
            </div>

        );
    }

}

export default Chart;
