import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './images/react-icon.png'

const samplePage = (
  <div>
    <img width='100px' alt='React Logo' src={logo}/>
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
root.render(samplePage);
