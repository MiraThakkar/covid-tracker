import React from "react";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                </button>
            </div>
        </nav>

    );
}

export default Navbar;