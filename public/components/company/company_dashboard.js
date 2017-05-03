import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api'
import RoomList from './room_list.js'
import RoomListItem from './room_list_item.js'

class CompanyDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openRooms: [],
      pendingRooms: []
    }
  }
  componentDidMount() {
    roomApis.getOpenRooms()
    .then(openRooms =>
      this.setState({ openRooms })
    )
  }

  componentDidMount() {
    roomApis.getPendingRooms()
    .then(pendingRooms =>
      this.setState({ pendingRooms })
    )
  }

  render() {
    return (
      <div>
        <RoomList openRooms = {this.state.openRooms} pendingRooms = {this.state.pendingRooms}/>
      </div>
    )
  }

}

export default CompanyDashboard;
