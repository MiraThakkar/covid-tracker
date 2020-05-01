import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class SignUp extends Component {
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "15px",
            fontFamily: "Arial",
            height: "auto",
            width: "auto",
            marginLeft: "30%",
            marginRight: "30%",
            background: "#2196f3",
            marginTop: "10%"

          };
    
        
        return (
            <div className= "signup">
                <form style= {mystyle}>
                <h4>Sign Up</h4>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                     <Link to="/Login"> Already registered?</Link>
                </p>
            </form>
            </div>
        );
    }
}
