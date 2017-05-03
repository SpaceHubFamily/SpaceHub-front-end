import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoomListItem from './room_list_item'
import PendingListItem from './pending_list_item'

const RoomList = (props) => {
  const rooms = props.openRooms
  const openRoomList = rooms.map(room => {
    return <RoomListItem key={room.room_name} room={room} />
  })

const PendingRoomList = (props) => {

  const pendingRoom = props.pendingRooms
  const pendingRoomList = pendingRooms.map(pendingRoom => {
    return <PendingListItem key={pendingRoom.room_name} pendingRoom={pendingRoom} />
  })
}
  return (
    <div className="roomList">
      <h1>My dashboard</h1>
      <ul>
        {openRoomList}
        {/* {pendingRoomList} */}
      </ul>
    </div>
  )
}

export default RoomList
