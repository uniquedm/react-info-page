import React from "react";
import logo from "./logo192.png"

export default function App() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" className="logo"/>
            <h3>ReactFacts</h3>
            <h5 className="project">Project - React Info Page</h5>
        </nav>
    );
}