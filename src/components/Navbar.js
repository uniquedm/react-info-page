import React from "react"
import logo from "./logo192.png"

export default function Navbar() {
    let [darkMode, setDarkMode] = React.useState()
    function toggleDarkMode() {
        setDarkMode((prevMode)=> !prevMode)
    }

    let darkStyle = {
        background: "black",
        color: "white"
    }

    let lightStyle = {
        background: "white",
        color: "black"
    }

    return (
        <nav style={darkMode? darkStyle : lightStyle} className="nav">
            <img src={logo} alt="logo" className="logo"/>
            <h3 className="logo-text">ReactFacts</h3>
            <button className="dark-mode-button" onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </nav>
    );
}