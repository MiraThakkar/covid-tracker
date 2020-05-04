import React from "react";
import { Link } from "react-router-dom";

function Login ()  {
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
<<<<<<< HEAD:client/src/pages/Login.js
        marginTop: "5%",
        marginBottom: "5%"
=======
        marginTop: "10%"
>>>>>>> master:src/pages/Login.js
      };

    
        return (
            <div>
                
                <form style= {mystyle} >
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
        </div>
        );
    }

export default Login;
