import React from "react";
import Logo from "/assets/logo.svg";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={Logo} />
            <ul className="navbar__links">
                <li className="navbar__links-active">Home</li>
                <li>About</li>
                <li>Feature</li>
                <li>Contact</li>
                <button className="navbar-cta">LOGIN</button>
            </ul>
        </div>
    );
}

export default Navbar;
