import React, { Component } from 'react';
const NavBar = ({length}) => {
    return (<nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">NavBar
            <span className="badge badge-pill badge-secondary">{length}</span></a>
        </nav>
            );
}

 
export default NavBar; 