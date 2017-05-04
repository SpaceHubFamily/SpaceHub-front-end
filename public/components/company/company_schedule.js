import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api.js'

class CompanyDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookedRooms: []
    }
  }

  componentDidMount() {
      roomApis.getConfirmedRooms()
      .then(bookedRooms =>
        this.setState({ bookedRooms })
      )
    }

  render() {
    return(
      <div>
        <RoomList bookedRooms = {this.state.bookedRooms} />
      </div>
    )
  }

}

export default CompanyDashboard;
