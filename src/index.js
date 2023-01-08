import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./images/react-icon.png"

function Header() {
  return (
    <header>
      <nav>
        <img alt="React Logo" src={logo} width="100px"/>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2023 Development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <>
      <h1>Fews things</h1>
      <ol>
        <li>React</li>
        <li>JSX</li>
      </ol>
    </>
  )
}

function Page() {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);