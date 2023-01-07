import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const samplePage = (
  <div>
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Released in 2013</li>
      <li>Created by Jordan Walke</li>
      <li>Maintained by Facebook</li>
      <li>Powers thousands of enterprise apps</li>
    </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  samplePage
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
