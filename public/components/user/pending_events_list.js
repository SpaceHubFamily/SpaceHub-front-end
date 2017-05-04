import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';


const PendingEventsList = ({ event }) => {
  return (
    <Card key={event}>
        <CardHeader
          title={event.owner.company_name}
          subtitle={event.shindig.venue_name}
          avatar={event.shindig.venue_img_url}
        />
        <CardMedia>
          <img src={event.shindig.room_img_url} className="card-img" />
        </CardMedia>
        <CardText className="card-text">
          <h1 className="event-time">{event.shindig.start_time} - {event.shindig.end_time}</h1>
          <h2 className="event-date">{event.shindig.requested_date}</h2>
          <h4 className="event-location">{event.shindig.city}, {event.shindig.state}</h4>
        </CardText>
        <CardActions>
          <div className="req-contain">
            <RaisedButton
              className="request-btn"
              href=""
              target="_blank"
              label="Response Pending"
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </CardActions>
    </Card>
  )
}



export default PendingEventsList
