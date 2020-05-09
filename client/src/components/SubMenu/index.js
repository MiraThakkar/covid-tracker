import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import ToggleMenu from "../ToggleMenu";
import CoronaVirus from "../../assets/images/Coronavirus.png";


function Sidebar() {


    return(
        
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
                 <button className = "btn btn-info mt-3 my-health" onClick={("/profile")}><i className="fas fa-file-medical"></i> My Health
                    <Link
                             to="/profile" className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"} >
                    </Link>
                 </button>
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
                         <i className="fas fa-map"></i> USA
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
                         <i className="fas fa-info-circle"></i> Information

                         </Link>
                     </li>
                 
                     <li className="nav-item">
                         <Link
                             to="/habits"
                             className={
                             window.location.pathname === "/habits" || window.location.pathname === "/habits"
                             ? "nav-link active"
                             : "nav-link"
                             }
                         >
                         <i className="fas fa-heartbeat"></i> Healthy Habits

                         </Link>
                     </li>
                 </ul>
                
             </nav>
         </div> 

    );
}

export default Sidebar;