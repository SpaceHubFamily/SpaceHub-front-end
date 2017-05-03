import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';


const ShindigListItem = ({ shindig }) => {
  return (
    <Card key={shindig}>
        <CardHeader
          title={shindig.company_name}
          subtitle={shindig.venue_name}
          avatar="https://unsplash.it/50/50"
        />
        <CardMedia>
          <img src="https://nagenomics.files.wordpress.com/2014/08/id-100254315.jpg" className="card-img" />
        </CardMedia>
        {/* <CardTitle title={shindig.venue_city} /> */}
        <CardText className="card-text">
          <h1>{shindig.start_time} - {shindig.end_time}</h1>
          <h2>{shindig.shindig_date}</h2>
          <h4>{shindig.venue_city}, {shindig.venue_state}</h4>
        </CardText>
        <CardActions>
          <div className="req-contain">
            <RaisedButton
              className="request-btn"
              href=""
              target="_blank"
              label="Request Space"
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
          </div>
        </CardActions>
    </Card>
  )
}



export default ShindigListItem
