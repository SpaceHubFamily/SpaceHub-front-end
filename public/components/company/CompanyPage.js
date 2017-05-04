import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SideNav from './SideNav'
import CompanyDashboard from './company_dashboard.js'
import Background from '../../styles/grey.png'
import ReactRouter, { Route, BrowserRouter } from 'react-router-dom'
import NewRoomForm from './newRoomForm'
import NewVenueForm from './newVenueForm'

let mainStyle = {
  backgroundImage: `url(${Background})`,
}

class CompanyPage extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div style= { mainStyle }>
            <SideNav />
            <Route component={CompanyDashboard} exact path="/company"/>
              <Route component={NewRoomForm} path="/new-room"></Route>
              <Route component={NewVenueForm} path="/company/my-venues"></Route>
          </div>
        </MuiThemeProvider>
    )
  }
};

export default CompanyPage;
