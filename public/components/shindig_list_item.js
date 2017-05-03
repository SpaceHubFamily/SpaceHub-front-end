import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ShindigListItem = ({ shindig }) => {
  return (
    <Card>
        <CardText>
          <h3>Company Name</h3>
          <h4>Room Name</h4>
          <p>Date: {shindig.date}</p>
          <p>Time: {shindig.start_time} - {shindig.end_time}</p>
        </CardText>
        <CardHeader
            title="User"
            subtitle="User name"
            avatar="https://unsplash.it/50/50"
          />
        <CardActions>
          <FlatButton label="Book Space" />
        </CardActions>
    </Card>
  )
}



export default ShindigListItem
