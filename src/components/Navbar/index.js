import React from "react";
import "./style.css";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <button type="button" id="sidebarCollapse" className="btn btn-toggle">
                    <i className="fas fa-align-left"></i>
                </button>
            </div>
        </nav>

    );
}

export default Navbar;