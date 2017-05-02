import React, { Component } from 'react'

const RoomListItem = (props) => {
  return (
    <li>
      <p>{props.room.name}</p>
      <p>{props.room.capacity}</p>
      <p>{props.room.hour_rate}</p>
      <p>{props.room.img_url}</p>
    </li>
  )
}

export default RoomListItem
