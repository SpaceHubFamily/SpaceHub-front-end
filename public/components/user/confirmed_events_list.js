import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';


const ConfirmedEventsList = ({ event }) => {
  return (
    <Card key={event}>
        <CardHeader
          title={event.company_name}
          subtitle={event.venue_name}
          avatar={event.venue_img_url}
        />
        <CardMedia>
          <img src={event.room_img_url} className="card-img" />
        </CardMedia>
        <CardText className="card-text">
          <h1 className="event-time">{event.start_time} - {event.end_time}</h1>
          <h2 className="event-date">{event.date}</h2>
          <h4 className="event-location">{event.venue_city}, {event.venue_state}</h4>
        </CardText>
        <CardActions>
          <div className="req-contain">
            <RaisedButton
              className="request-btn"
              href=""
              target="_blank"
              label="Confirmed!"
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </CardActions>
    </Card>
  )
}



export default ConfirmedEventsList
