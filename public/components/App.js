import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Switch, Route } from 'react-router';
import {Provider} from 'react-redux';
import LandingPage from './LandingPage';
import CompanyPage from './CompanyPage';
import UserPage from './UserPage';
import SetUpPage from '../containers/SetUpPage';


injectTapEventPlugin();

import {
  darkBlack,
  grey100,
  grey300,
  grey400,
  grey500,
  fullBlack,
  indigo300,
  blue600,
  lightBlue900,
  indigo400,
  redA700,
  white,
  cyan500,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';


const muiTheme = getMuiTheme({
  palette: {
    textColor: indigo300,
  },
  appBar: {
    height: 70,
    color: white,
    textColor: darkBlack,
  },
  avatar: {
    borderColor: white,
  }
});


var actions = require('../actions/actions.js');
var setUpStore = require('../stores/setUpStore.js').configure();

setUpStore.subscribe(() => {
  console.log('New state', setUpStore.getState());
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/company" component={CompanyPage} />
            <Route path="/user" component={UserPage} />
            <Provider store={setUpStore}>
              <Route path="/setup" component={SetUpPage} />
            </Provider>
        </Switch>
      </div>
  </MuiThemeProvider>
);

export default App;
