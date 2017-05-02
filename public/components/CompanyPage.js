import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import SideNav from './SideNav'
import roomApis from '../utils/api'

class CompanyPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: []
    }
  }

  componentDidMount() {
    roomApis.getRooms()
    .then(result => console.log(result))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <SideNav />
        </div>
      </MuiThemeProvider>
    )
  }
};

export default CompanyPage;
