import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SideNav from './SideNav'
import RoomList from './room_list'
import roomApis from '../utils/api'

class CompanyPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: []
    }
  }

  componentDidMount() {
    roomApis.getRooms('https://spacehubapi.herokuapp.com/rooms')
    .then(rooms =>
      this.setState({ rooms })
    )
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          
          <RoomList rooms = {this.state.rooms} />

        </div>
      </MuiThemeProvider>
    )
  }
};

export default CompanyPage;
