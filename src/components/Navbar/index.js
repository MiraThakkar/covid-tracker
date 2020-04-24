import React from "react";
import "./style.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../Login";
import SignUp from "../signup";
import Earth from "../../assets/images/earth.png"

function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <button type="button" id="sidebarCollapse" className="btn btn-toggle">

                    <i className="fas fa-align-left"></i>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/signin"}>Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                        </li>
                    </ul>

                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path="/signin" component={Login} />
                                <Route path="/sign-up" component={SignUp} />
                            </Switch>
                        </div>
                    </div>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

{/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
<div className="container">
  <Link className="navbar-brand" to={"/signin"}>positronX.io</Link>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to={"/signin"}>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
      </li>
    </ul>

    <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/signin" component={Login} />
            <Route path="/sign-up" component={SignUp} />
        </Switch>
        </div>
        </div>

  </div>
</div>
</nav> */}
