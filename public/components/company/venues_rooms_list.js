import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import VenuesRoomsListItem from './venues_rooms_list_item'

import Divider from 'material-ui/Divider';

let style = {
  fontSize: 20,
  letterSpacing: 5,
  fontFamily: 'Merriweather'
}

const VenuesRoomsList = ({ allOpenRooms }) => {

  const openRoomList = allOpenRooms.map(room => {
    return <VenuesRoomsListItem key={room.room_name} venuesRoom={room} />
  })

  return (
    <div className="roomList" style={style}>
      <h2>My rooms</h2>
      <Divider />
      <ul>
        {openRoomList}
      </ul>

    </div>
  )
}

export default VenuesRoomsList
