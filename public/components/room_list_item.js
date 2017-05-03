import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RoomListItem = ({ room }) => {
  return (
    <Card>
        <CardText>
          <h3>Status: </h3>
          <p>Room: {room.room_name}</p>
          <p>Rate: {room.day_rate}</p>
        </CardText>
        <CardHeader
            title="User"
            subtitle="User name"
            avatar="https://unsplash.it/50/50"
          />
        <CardActions>
          <FlatButton label="Accept" />
          <FlatButton label="Decline" />
        </CardActions>
    </Card>
  )
}



export default RoomListItem
