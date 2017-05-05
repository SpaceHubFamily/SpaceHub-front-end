import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, CircularProgress} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

const style = {
  card: {
    margin: 40,
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Merriweather',
    zDepth: '3'
  },
  text: {
    fontSize: 20
  }
}

const RoomListItem = ({ room }) => {
  if(!room) {
    return <CircularProgress />
  }
  return (
    <Card style={style.card}>
        <CardText style={style.text}>
          <h3>Status: available</h3>
          <p>Room: {room.room_name}</p>
          <p>Rate: {room.day_rate}</p>
        </CardText>
          <CardMedia overlay={<CardTitle title={`Venue: ${room.venue_name}`} />}>
              <img src={room.room_img_url} className="roomImg"/>
          </CardMedia>
    </Card>
  )
}



export default RoomListItem
