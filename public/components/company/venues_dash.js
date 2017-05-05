import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api.js'
import VenuesRoomsList from './venues_rooms_list.js'


class VenuesDash extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allOpenRooms: [],
    }
  }

  componentDidMount() {
    roomApis.getAllRoomsForUser()
    .then(allOpenRooms =>
      this.setState({ allOpenRooms })
    )
  }

  render() {
    return (
      <div>
        <VenuesRoomsList allOpenRooms = {this.state.allOpenRooms}/>
      </div>
    )
  }

}

export default VenuesDash;
