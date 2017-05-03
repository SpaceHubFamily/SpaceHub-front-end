import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PendingListItem = ({ pendingRoom }) => {
  console.log(pendingRoom);
  return (
    <Card>
        <CardText>
          <h3>Status: pending </h3>
          <p>Room: {pendingRoom.room_name}</p>
          <p>Rate: {pendingRoom.day_rate}</p>
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



export default PendingListItem
