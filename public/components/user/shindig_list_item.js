import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ToggleStar from 'material-ui/svg-icons//toggle/star';
import ShindigRequest from './ShindigRequest.js';
import RaisedButton from 'material-ui/RaisedButton';
import Moment from 'react-moment';


const style = {
  card: {
    marginBottom: '30px',
  },
};

const ShindigListItem = ({ shindig }) => {
  console.log(shindig);
  return (
    <Card key={shindig} style={style.card}>
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
          <h2 className="shindig-time"><Moment format="HH:mm">{shindig.start_time}</Moment> - <Moment format="HH:mm">{shindig.end_time}</Moment></h2>
          <h2 className="shindig-date"><Moment format="D MMM YYYY">{shindig.shindig_date}</Moment></h2>
          <h4 className="shindig-location">{shindig.venue_city}, {shindig.venue_state}</h4>
        </CardText>
        <CardActions>
          <div className="req-contain">
            <ShindigRequest />
          </div>
        </CardActions>
    </Card>
  )
}



export default ShindigListItem
