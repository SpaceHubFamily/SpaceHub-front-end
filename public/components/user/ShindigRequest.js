import React, { Component } from 'react'
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton';
import ToggleStar from 'material-ui/svg-icons//toggle/star';


class ShindigRequest extends React.Component {

  EmailYouPieceOfShit = () => {

    var shindig = {}

    shindig.company_email = 'tommykrepp@aol.com'
    shindig.first_name = 'RickyTicky'
    shindig.last_name = 'BobbyWobbin'

    axios.post('https://spacehubapi.herokuapp.com/shindig_request/request', shindig)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
render() {
  return (
    <RaisedButton
      onClick={this.EmailYouPieceOfShit}
      className="request-btn"
      href=""
      labelPosition="before"
      target="_blank"
      label="Request Space"
      icon={<ToggleStar />}
      />
  );
}
}

export default ShindigRequest;


// shindig.company_email = 'tommykrepp@aol.com'
// shindig.first_name = this.props.firstName
// shindig.last_name = this.props.lastName
