import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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

const VenuesRoomsListItem = ({ venuesRoom }) => {

  return (
    <Card style={style.card}>
        <CardText style={style.text}>
          <h3>Status: available</h3>
          <p>Room: {venuesRoom.room_name}</p>
          <p>Rate: {venuesRoom.day_rate}</p>
        </CardText>
          <CardMedia overlay={<CardTitle title={`Venue: ${venuesRoom.venue_name}`} />}>
              <img src={venuesRoom.room_img_url} className="roomImg"/>
          </CardMedia>
    </Card>
  )
}



export default VenuesRoomsListItem
