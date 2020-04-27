import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import Earth from "../../assets/images/earth.png";
import ToggleMenu from "../ToggleMenu"

function Sidebar() {

    return(

        <div className="wrapper">

            <nav id="sidebar">
                <div className="sidebar-header">
                <img src={Earth} />
                    <h3>ViDAPP</h3>
                    {/* <button  type="button" id="sidebarCollapse" className="btn btn-toggle">
                    <i className="fas fa-align-left"></i> */}
                    
                    <ToggleMenu 
                    render={({on, toggle})=>(
                      <div>

                        {on && <Link to ='/Login' >Sign In </Link>}
                        {on && <Link to ='/Signup' > Sign Up </Link>}
                          {/* <button onClick= {toggle}></button> */}

                          <button  onClick= {toggle}
                          type="button" id="sidebarCollapse" className="btn btn-toggle">
                    <i className="fas fa-align-left"></i></button>
                      </div>
                  )} />

                {/* </button> */}
                </div>
                <button className = "btn btn-info mt-3"><i class="fas fa-chart-bar"></i>  Dashboard
                </button>
                <ul className="navbar-nav">
                    
                    <li className = "nav-item">
                        <Link
                            to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                        >
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                            window.location.pathname === "/" || window.location.pathname === "/dashboard"
                            ? "nav-link active"
                            : "nav-link"
                            }
                        >
                        Dashboard
                        </Link>
                    </li>
                    
                </ul>
                
            </nav>
        </div>

    );
}

export default Sidebar;