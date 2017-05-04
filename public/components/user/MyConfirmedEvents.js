import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api'
import ConfirmedEvents from './confirmed_events.js'
import ConfirmedEventsList from './confirmed_events_list.js'

class MyConfirmedEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }
  componentDidMount() {
    roomApis.getConfirmedShindigs()
    .then(events =>
      this.setState({ events })
    )
  }
  render() {
    return (
      <div>
        <ConfirmedEvents events = {this.state.events} />
      </div>
    )
  }

}

export default MyConfirmedEvents;
