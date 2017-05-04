import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Switch, Route } from 'react-router';
import LandingPage from './landing/LandingPage';
import CompanyPage from './company/CompanyPage';
import UserPage from './user/UserPage';
import SetUpPage from '../containers/SetUpPage';
import NewVenueForm from './company/newVenueForm';


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
  appBar: {
    height: 70,
    color: white,
    textColor: darkBlack,
  },
  avatar: {
    borderColor: white,
  },
  drawer: {
    width: spacing.desktopKeylineIncrement * 4,
    color: lightBlue900,
  },
  button: {
    height: 36,
    minWidth: 88,
    iconButtonSize: spacing.iconSize * 2,
  },

});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/company" component={CompanyPage} />
            <Route path="/user" component={UserPage} />
            <Route path="/setup" component={SetUpPage} />
            {/* <Route path="/newVenueForm" component={NewVenueForm} /> */}
        </Switch>
      </div>
  </MuiThemeProvider>
);

export default App;
