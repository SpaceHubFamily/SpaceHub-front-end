import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoomListItem from './room_list_item'
import PendingListItem from './pending_list_item'
import BookedListItem from './booked_list_item'
import Divider from 'material-ui/Divider';

let style = {
  fontSize: 20,
  letterSpacing: 5,
  fontFamily: 'Merriweather'
}

const RoomList = ({openRooms, pendingRooms, bookedRooms, handleDelete}) => {
  const openRoomList = openRooms.map(room => {
    return <RoomListItem key={room.room_name} room={room} />
  })

  const pendingRoomList = pendingRooms.map(pendingRoom => {
     return <PendingListItem key={pendingRoom.shindig_id} pendingRoom={pendingRoom} handleDelete={handleDelete}/>
  })

  const bookedRoomList = bookedRooms.map(bookedRoom => {
     return <BookedListItem key={bookedRoom.room_name} bookedRoom={bookedRoom} />
  })

  return (
    <div className="roomList" style={style}>
      <h1>My Dashboard</h1>
      <Divider />
      <ul>
        <h2>Pending Requests</h2>
        {pendingRoomList}

        <h2>Confirmed Bookings</h2>
        <Divider />
        {bookedRoomList}

        <h2>Open Rooms</h2>

        {openRoomList}

      </ul>
    </div>
  )
}

export default RoomList
