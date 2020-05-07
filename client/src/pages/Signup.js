import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        console.log("Senting post request")
        return axios.post('/api/users/submit', {
            firstName: this.state.firstName, 
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
        
      };
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
            marginTop: "5%",
        marginBottom: "5%"
          };
        
        return (
            <div className= "signup">
                <div style= {mystyle}>
                    <h4>Sign Up</h4>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name"
                        onChange={this.handleInputChange}
                        value={this.state.firstName}
                        name="firstName"
                         />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name"
                        onChange={this.handleInputChange}
                        value={this.state.lastName}
                        name="lastName"
                         />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" 
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name="email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                        onChange={this.handleInputChange}
                        value={this.state.password}
                        name="password"
                         />
                    </div>
                    <p className="forgot-password text-right">
                        <Link to="/Login"> Already registered?</Link>
                    </p>
                </div>
                <button onClick={this.handleFormSubmit} id="submit" type="submit" 
                className="btn btn-primary btn-block">Sign Up</button>
            </div>
        );
    }
}
