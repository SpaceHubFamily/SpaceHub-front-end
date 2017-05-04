import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SideNav from './SideNavUser'
import Background from '../../styles/grey.png'
import ReactRouter, { Route, BrowserRouter } from 'react-router-dom'
import UserDashboard from './user_dashboard.js'
import MyConfirmedEvents from './MyConfirmedEvents.js'
import MyPendingEvents from './MyPendingEvents.js'

class UserPage extends Component {

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
          <Route component={UserDashboard} exact path="/user"></Route>
          <Route component={MyConfirmedEvents} path="/user/confirmed"></Route>
          <Route component={MyPendingEvents} path="/user/pending"></Route>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default UserPage;


{/* <SideNav />
<UserDashboard />
<MyConfirmedEvents />
<MyPendingEvents /> */}
