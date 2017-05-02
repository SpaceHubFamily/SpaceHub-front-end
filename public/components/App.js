import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import LandingPage from './LandingPage';
import CompanyPage from './CompanyPage';
import UserPage from './UserPage';
import SetUpPage from './containers/SetUpPage';

import { Switch, Route } from 'react-router'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
      <div>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/company" component={CompanyPage} />
            <Route path="/user" component={UserPage} />
            <Route path="/setup" component={SetUpPage} />
        </Switch>
      </div>
  </MuiThemeProvider>
);

export default App;
