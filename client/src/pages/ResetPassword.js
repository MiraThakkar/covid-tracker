import React from "react";
// import { Link } from "react-router-dom";

function ResetPassword ()  {
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
            <div>
                
                <form style= {mystyle} >
                    <h4>Forgot Password?</h4>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <h5> Or </h5>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                 

                    <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                    <p className="forgot-password text-right">
                    
                    </p>
                </form>
              </div>  

        );
        }

export default ResetPassword;



