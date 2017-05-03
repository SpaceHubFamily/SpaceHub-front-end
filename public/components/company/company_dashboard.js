import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api.js'
import RoomList from './room_list.js'
import RoomListItem from './room_list_item'
import PendingListItem from './pending_list_item'

class CompanyDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openRooms: [],
      pendingRooms: [],
      bookedRooms: []
    }
  }

  componentDidMount() {
    roomApis.getOpenRooms()
    .then(openRooms =>
      this.setState({ openRooms })
    )

    roomApis.getPendingRooms()
    .then(pendingRooms =>
      this.setState({ pendingRooms })
    )

    roomApis.getConfirmedRooms()
    .then(bookedRooms =>
      this.setState({ bookedRooms })
    )
  }

  render() {
    return (
      <div>
        <RoomList openRooms = {this.state.openRooms}
            pendingRooms = {this.state.pendingRooms}
            bookedRooms = {this.state.bookedRooms} />
      </div>
    )
  }

}

export default CompanyDashboard;
