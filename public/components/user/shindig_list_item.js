import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RequestButton from './requestButton'


const ShindigListItem = ({ shindig }) => {
  console.log(shindig);
  return (
    <Card key={shindig}>
        <CardHeader
          title={shindig.company_name}
          subtitle={shindig.venue_name}
          avatar={shindig.venue_img_url}
        />
        <CardMedia>
          <img src={shindig.room_img_url} className="card-img" />
        </CardMedia>
        {/* <CardTitle title={shindig.venue_city} /> */}
        <CardText className="card-text">
          <h1 className="shindig-time">{shindig.start_time} - {shindig.end_time}</h1>
          <h2 className="shindig-date">{shindig.shindig_date}</h2>
          <h4 className="shindig-location">{shindig.venue_city}, {shindig.venue_state}</h4>
        </CardText>
        <CardActions>
          <RequestButton shindig={shindig} />
        </CardActions>
    </Card>
  )
}



export default ShindigListItem
