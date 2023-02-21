import React from "react"
import logo from "./logo192.png"

export default function Navbar() {

    function toggleDarkMode() {
        console.log("Toggled!")
    }

    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="logo"/>
            <h3 className="logo-text">ReactFacts</h3>
            <button className="dark-mode-button" onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </nav>
    );
}