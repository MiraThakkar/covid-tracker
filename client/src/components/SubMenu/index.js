import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import ToggleMenu from "../ToggleMenu";
import CoronaVirus from "../../assets/images/Coronavirus.png";
//import Example from "../../components/Collapse"

function Sidebar() {


    return(
        
            // <div className="container center">
                
            //     <nav id="slide-menu">
            //         <ul>
            //             <li className="timeline">
            //             <i className="fa fa-bar-chart"></i>
            //             <span>Profile</span>
            //             </li>
            //             <li className="events">
            //             <i className="fa fa-flag"></i>
            //             <span>Home</span>
            //             </li>
            //             <li className="calendar">
            //             <i className="fa fa-calendar-o"></i>
            //             <span>Dashboard</span>
            //             </li>
            //             <li className="sep settings">
            //             <i className="fa fa-gear"></i>
            //             <span>Map</span>
            //             </li>
            //             <li className="sep settings">
            //             <i className="fa fa-gear"></i>
            //             <span>Symptoms</span>
            //             </li>
            //             <li className="logout">
            //             <i className="fa fa-close"></i>
            //             <span>Logout</span>
            //             </li>
            //         </ul>
            //     </nav>
                
            //     <div id="content">
            //         <div className="menu-trigger" onClick= {ToggleMenu}>
            //             <i className="fa fa-bars"></i>
            //         </div> 
            //     </div>
            // </div>

         <div className="sidebar-wrapper ">

            <nav id="sidebar">
                <div className="sidebar-header">

                <Link className="navbar-brand" Link to ='/home'>
                    <img className= "image" src={CoronaVirus} alt =  ""/>
                    ViD-APP</Link>

                
                    <ToggleMenu 
                   render={({on, toggle})=>(
                     <div>

                        {on && <Link to ='/Login' >Sign In <span className= "p-2"> | </span></Link>}
                        
                        {on && <Link to ='/Signup' > Sign Up </Link>}
                     
                       

                         <button  onClick= {toggle}
                         type="button" id="sidebarCollapse" className="btn btn-toggle">
                   <i className="fas fa-align-left"></i></button>
                     </div>
                 )} />
               

                 </div>
                 {/* <button className = "btn btn-info mt-3" onClick={("/profile")}><i className="fas fa-user"></i>  Profile
                    <Link
                             to="/profile" >
                    </Link>
                 </button> */}
                 <ul className="navbar-nav">
                    
                     <li className = "nav-item">
                         <Link
                             to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                         >
                         <i className="fas fa-home"></i> Home
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
                        <i className="fas fa-chart-bar"></i> Dashboard
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
                         <i className="fas fa-map"></i> Map
                         </Link>
                     </li>
                    
                     <li className="nav-item">
                         <Link
                             to="/symptoms"
                             className={
                             window.location.pathname === "/symptoms" || window.location.pathname === "/symptoms"
                             ? "nav-link active"
                             : "nav-link"
                             }
                         >
                         <i className="fas fa-file-medical"></i> Symptoms
                         </Link>
                     </li>
                 
                 </ul>
                
             </nav>
         </div> 

    );
}

export default Sidebar;