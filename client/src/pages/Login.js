import React, { Component } from "react";
import { Link } from "react-router-dom";
import nature from "../assets/images/nature.jpg";
import { Container } from "../components/Grid";
import axios from "axios";

export default class Login extends Component {

    state = {
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
        return axios.post('/api/users/login', {
            email: this.state.email,
            password: this.state.password
        })
          .then(function (response) {
            window.location.replace("/home");
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

    const image= {
        backgroundImage:`url(${nature})`,
        height: "100%" 
    }
        return (
            <div style ={image}>
                <Container >
                <form style= {mystyle}>
                    <h4>Sign In</h4>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                         <Link to="/ResetPassword"> Forgot Password?</Link>
                    </p>
                </form>
                </Container>
        </div>
        );
    }
}

