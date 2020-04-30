import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import ToggleMenu from "../ToggleMenu";
import CoronaVirus from "../../assets/images/Coronavirus.png";


function Sidebar() {

    return(

        <div className="sidebar-wrapper">

            <nav id="sidebar">
                <div className="sidebar-header">

                <a className="navbar-brand" href="#">
                    <img className= "image" src={CoronaVirus} />
                    ViD-APP</a>

                
                    <ToggleMenu 
                   render={({on, toggle})=>(
                     <div>

                       {on && <Link to ='/Login' >Sign In / </Link>}
                       
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
                        <i class="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/dashboard"
                            className={
                            window.location.pathname === "/dashboard" || window.location.pathname === "/dashboard"
                            ? "nav-link active"
                            : "nav-link"
                            }
                        >
                       <i class="fas fa-chart-bar"></i> Dashboard
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link
                            to="/usaForm"
                            className={
                            window.location.pathname === "/usaForm" || window.location.pathname === "/usaForm"
                            ? "nav-link active"
                            : "nav-link"
                            }
                        >
                        <i class="fas fa-map"></i> Map
                        </Link>
                    </li>
                    

                </ul>
                
            </nav>
        </div>

    );
}

export default Sidebar;