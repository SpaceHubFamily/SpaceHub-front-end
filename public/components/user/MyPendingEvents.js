import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../../utils/api'
import PendingEvents from './pending_events.js'
import PendingEventsList from './pending_events_list.js'

class MyPendingEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }
  componentDidMount() {
    roomApis.getPendingShindigs()
    .then(events => {
      console.log(events)
      this.setState({ events })
    })
  }
  render() {
    return (
      <div>
        <PendingEvents events = {this.state.events} />
      </div>
    )
  }

}

export default MyPendingEvents;
