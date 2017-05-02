import React from 'react';
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SideNav from './SideNav.js'
import SearchBar from './search_bar.js'
const CompanyPage = () => (
  <MuiThemeProvider>
    <div>
    <SideNav />
  </div>
  </MuiThemeProvider>
);

export default CompanyPage;
