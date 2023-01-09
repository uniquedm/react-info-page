import React from "react"
import ReactDOM from "react-dom/client"
import './index.css';
import Header from "./Header"
import Footer from "./Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);