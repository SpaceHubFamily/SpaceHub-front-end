import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import ConfirmedEventsList from './confirmed_events_list.js'

const ConfirmedEvents = (props) => {
  const events = props.events
  const eventList = events.map(event => {
    return <ConfirmedEventsList key={event.id} event={event} />
  })

  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '100%',
    },
  };

  return (
    <div className="shindigList">
      <h1>Confirmed Events</h1>
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={500}
          padding={30}
          style={styles.gridList}
          >
          {eventList}
        </GridList>
      </div>
    </div>
  )
}

export default ConfirmedEvents
