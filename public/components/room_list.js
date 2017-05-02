import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoomListItem from './room_list_item.js'

const RoomList = (props) => {
  const rooms = props.rooms
  const roomList = rooms.map(room => {
    return <RoomListItem key={room.name} room={room} />
  })

  return (
    <div className="roomList">
      <h1>My rooms</h1>
      <ul>
        {roomList}
      </ul>
    </div>
  )
}

export default RoomList
