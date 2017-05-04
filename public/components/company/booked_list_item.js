import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MaterialUi, { FlatButton, Avatar} from 'material-ui';

const style = {
  margin: 20,
  fontSize: 20,
  letterSpacing: 2,
  fontFamily: 'Merriweather'
}

const BookedListItem = ({ bookedRoom }) => {
  return (
    <Card style={style}>
        <CardText>
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
