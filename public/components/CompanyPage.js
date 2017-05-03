import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SideNav from './SideNav'
import CompanyDashboard from './company_dashboard.js'

class CompanyPage extends Component {

  // var contentPane;
  // switch
  //   case
  //   contentPane = <RoomList rooms = {this.state.rooms} />
  // read from redux state
  // depending on sidenav state of what's been clicked
  // render either RoomList, CreateNewRoom, Schedule, Venue components
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SideNav />
          <CompanyDashboard />
        </div>
      </MuiThemeProvider>
    )
  }
};

export default CompanyPage;
