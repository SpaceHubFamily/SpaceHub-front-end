import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const BookedListItem = ({ bookedRoom }) => {
  return (
    <Card>
        <CardText>
          <h3>Status: booked </h3>
          <p>Room: {bookedRoom.room_name}</p>
          <p>Rate: {bookedRoom.room_hourly_rate}</p>
          <img src={bookedRoom.room_img_url} className="roomImg"/>
        </CardText>
        <CardMedia overlay={<CardTitle title={`Booked for: ${bookedRoom.date}`} subtitle={bookedRoom.start_time} />}>
            <img src="images/nature-600-337.jpg" />
        </CardMedia>
        <CardHeader
            title={bookedRoom.first_name}
            subtitle={bookedRoom.phone_number}
            avatar="https://unsplash.it/50/50"
          />
    </Card>
  )
}

export default BookedListItem
