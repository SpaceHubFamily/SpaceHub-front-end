import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api'
import RoomList from './room_list.js'
import RoomListItem from './room_list_item.js'

class CompanyDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rooms: []
    }
  }
  componentDidMount() {
    roomApis.getOpenRooms()
    .then(rooms =>
      this.setState({ rooms })
    )
  }
  render() {
    return (
      <div>
        <RoomList rooms = {this.state.rooms} />
      </div>
    )
  }

}

export default CompanyDashboard;
