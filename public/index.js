import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import App from './components/App.js';

require('./styles/main.css');

ReactDOM.render((
  <HashRouter>
    <App/>
  </HashRouter>

     ),
     document.getElementById('app')
);
