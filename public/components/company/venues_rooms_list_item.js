import React, { Component } from 'react'
<<<<<<< HEAD
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, CircularProgress, FlatButton} from 'material-ui';
=======
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import EventSetter from './eventSetter'
>>>>>>> 041a568d6b7a4b53751b86d98602de3cfc21b642

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

const VenuesRoomsListItem = ({ venuesRoom }) => {
if(!venuesRoom) {
  return <CircularProgress />
}
  return (
    <Card style={style.card}>
        <CardText style={style.text}>
          <h3>Status: available</h3>
          <p>Room: {venuesRoom.room_name}</p>
          <p>Rate: {venuesRoom.day_rate}</p>
          <EventSetter roomID={venuesRoom.room_id}/>
        </CardText>
          <CardMedia overlay={<CardTitle title={`Venue: ${venuesRoom.venue_name}`} />}>
              <img src={venuesRoom.room_img_url} className="roomImg"/>
          </CardMedia>
    </Card>
  )
}



export default VenuesRoomsListItem
