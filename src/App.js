import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
    let [darkMode, setDarkMode] = React.useState()

    return (
        <>
            <Navbar darkMode = {darkMode} setDarkMode={setDarkMode}/>
            <Main darkMode = {darkMode}/>
        </>
    );
}