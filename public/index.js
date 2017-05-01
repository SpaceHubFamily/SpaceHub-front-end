import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import routes from './routes.js';

require('./styles/main.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
