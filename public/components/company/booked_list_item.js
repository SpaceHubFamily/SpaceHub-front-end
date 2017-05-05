import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { FlatButton, Avatar, CircularProgress} from 'material-ui';

const style = {
  card: {
    margin: 40,
    letterSpacing: 2,
    fontFamily: 'Merriweather',
    zDepth: '3'
  },
  text: {
    fontSize: 20
  }
}

const BookedListItem = ({ bookedRoom }) => {
  if(!bookedRoom) {
    return <CircularProgress />
  }
  return (
    <Card style={style.card}>
        <CardText style={style.text}>
          <h3>Status: booked </h3>
          <p>Room: {bookedRoom.room_name}</p>
          <p>Rate: {bookedRoom.room_hourly_rate}</p>
        </CardText>
        <CardMedia overlay={<CardTitle title={`Booked for: ${bookedRoom.date}`} subtitle={`From ${bookedRoom.start_time} till ${bookedRoom.end_time}`} />}>
            <img src={bookedRoom.room_img_url} className="roomImg"/>
        </CardMedia>
        <CardHeader
            title={`Booked by: ${bookedRoom.first_name}`}
            subtitle={`Contact: ${bookedRoom.phone_number}`}
            avatar={<Avatar src="https://unsplash.it/50/50" size={70}/>}
          />
    </Card>
  )
}

export default BookedListItem
