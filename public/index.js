import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import App from './components/App.js';
import {Provider} from 'react-redux';

require('./styles/main.css');

var actions = require('./actions/actions.js');
var store = require('./stores/setUpStore.js').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

ReactDOM.render((
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>

     ),
     document.getElementById('app')
);
