import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./assets/css/vendor/bootstrap.min.css"
import "./assets/css/vendor/slick.css"
import "./assets/css/vendor/slick-theme.css"
import "./assets/css/vendor/aos.css";
import "./assets/css/plugins/feature.css"
import "./assets/css/style.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

