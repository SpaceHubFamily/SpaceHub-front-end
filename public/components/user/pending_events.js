import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import PendingEventsList from './pending_events_list.js'

const PendingEvents = (props) => {
  const events = props.events
  const eventList = events.map(event => {
    return <PendingEventsList key={event.unique_id} event={event} />
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
      <h1>Pending Events</h1>
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

export default PendingEvents
