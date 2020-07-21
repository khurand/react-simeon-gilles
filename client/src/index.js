import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
