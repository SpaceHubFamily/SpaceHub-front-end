import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 20,
  fontSize: 20,
  letterSpacing: 2,
  fontFamily: 'Merriweather'
}

const RoomListItem = ({ room }) => {
  console.log(room);
  return (
    <Card style={style}>
        <CardText>
          <h3>Status: available</h3>
          <p>Room: {room.room_name}</p>
          <p>Rate: {room.day_rate}</p>
        </CardText>
        <CardHeader
            title="User"
            subtitle="User name"
            avatar="https://unsplash.it/50/50"
          />
    </Card>
  )
}



export default RoomListItem
