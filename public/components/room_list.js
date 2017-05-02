import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoomListItem from './room_list_item.js'

const RoomList = (props) => {
  const rooms = props.rooms
  return (
    <ul>
      {rooms.length}
    </ul>
  )
}

export default RoomList
