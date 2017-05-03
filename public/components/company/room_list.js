import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoomListItem from './room_list_item'
import PendingListItem from './pending_list_item'
import BookedListItem from './booked_list_item'

const RoomList = ({openRooms, pendingRooms, bookedRooms}) => {

  const openRoomList = openRooms.map(room => {
    return <RoomListItem key={room.room_name} room={room} />
  })

  const pendingRoomList = pendingRooms.map(pendingRoom => {
     return <PendingListItem key={pendingRoom.shindig_id} pendingRoom={pendingRoom} />
  })

  const bookedRoomList = bookedRooms.map(bookedRoom => {
     return <BookedListItem key={bookedRoom.room_name} bookedRoom={bookedRoom} />
  })

  return (
    <div className="roomList">
      <h1>My dashboard</h1>
      <ul>
        {pendingRoomList}
        {bookedRoomList}
        {openRoomList}
      </ul>
    </div>
  )
}

export default RoomList
