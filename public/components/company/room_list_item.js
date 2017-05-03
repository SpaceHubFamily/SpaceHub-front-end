import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const RoomListItem = ({ openRoom }) => {
  return (
    <Card>
        <CardText>
          <h3>Status: available</h3>
          <p>Room: {openRoom.room_name}</p>
          <p>Rate: {openRoom.day_rate}</p>
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
