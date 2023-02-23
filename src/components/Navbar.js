import React from "react"
import logo from "./logo192.png"

export default function Navbar({darkMode, setDarkMode}) {
    
    function toggleDarkMode() {
        setDarkMode((prevMode)=> !prevMode)
    }

    return (
        <nav className={darkMode ? "dark" : ""}>
            <img src={logo} alt="logo" className="logo"/>
            <h3 className="logo-text">ReactFacts</h3>
            <button className="dark-mode-button" onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </nav>
    );
}