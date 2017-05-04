import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import MaterialUI, { Avatar, Layout } from 'material-ui'


const style = {
  card: {
    margin: 40,
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: 'Merriweather',
    zDepth: '3'
  },
  text: {
    fontSize: 20
  }
}

const PendingListItem = ({ pendingRoom }) => {

  return (
    <Card style={style.card}>
      <CardText style={style.text}>
        <h3>Room: {pendingRoom.room_name}</h3>
      </CardText>
      <CardHeader
          title={`Requested by: ${pendingRoom.requester_first_name} ${pendingRoom.requester_last_name}`}
          subtitle={`email: ${pendingRoom.requester_email} phone: ${pendingRoom.requester_phone_number}`}
          avatar={<Avatar src={pendingRoom.requester_img_url} size={70}/>}
        />
        <CardActions>
          <FlatButton label="Accept" />
          <FlatButton label="Decline" />
        </CardActions>
        <CardMedia overlay={<CardTitle title={`Requested for: ${pendingRoom.requested_date}`} subtitle={`From ${pendingRoom.start_time} till ${pendingRoom.end_time}`} />}>
            <img src={pendingRoom.room_img_url} className="roomImg"/>
        </CardMedia>
    </Card>
  )
}



export default PendingListItem
