import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import App from './components/App.js';


ReactDOM.render((
  <HashRouter>
    <App/>
  </HashRouter>

     ),
     document.getElementById('app')
);
