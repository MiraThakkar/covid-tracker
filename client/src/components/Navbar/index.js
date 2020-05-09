import React, { useState, useEffect} from "react";
import axios from "axios"
import { Dropdown } from 'react-bootstrap';
import "./style.css";




// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "../../pages/Login";
// import SignUp from "../../pages/Signup";


function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData()
  }, []);

function getUserData () {
  axios.get("/api/users/user_data",
    {
      email: "mthakkar84@gmail.com",
    } 
  ).then(res => {
      setUser(res.data);
  }).catch(err => {
    console.log(err);
  })
}

console.log(user);


//  function  toggleOffcanvas() {
//     document.querySelector('.sidebar-offcanvas').classList.toggle('active');
//   }
    return (
    
      <div className= "navbar navbar-expand-lg navbar-light bg-ligh">
           
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
                   
                   {/* <button  type="button" id="sidebarCollapse" className="btn btn-toggle">
                   <i className="fas fa-align-left"></i> */}
              <ul className="navbar-nav navbar-nav-right ml-lg-auto">
                <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <span className="profile-text"> <i className = "fas fa-user" ></i>  {user.firstName }</span>
                  {/* <img className="img-xs rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="Profile" /> */}
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2" onClick={evt =>evt.preventDefault()}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                   Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </li>
              </ul>
                   
      </div>
  );
}

export default Navbar;


