import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ToggleStar from 'material-ui/svg-icons//toggle/star';


const style = {
  card: {
    marginBottom: '30px',
  },
};

const ShindigListItem = ({ shindig }) => {
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
          <h1 className="shindig-time">{shindig.start_time} - {shindig.end_time}</h1>
          <h2 className="shindig-date">{shindig.shindig_date}</h2>
          <h4 className="shindig-location">{shindig.venue_city}, {shindig.venue_state}</h4>
        </CardText>
        <CardActions>
          <div className="req-contain">
            <RaisedButton
              className="request-btn"
              href=""
              labelPosition="before"
              target="_blank"
              label="Request Space"
              icon={<ToggleStar />}
            />
          </div>
        </CardActions>
    </Card>
  )
}



export default ShindigListItem
