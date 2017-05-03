import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import ShindigListItem from './shindig_list_item.js'

const ShindigList = (props) => {
  const shindigs = props.shindigs
  const shindigList = shindigs.map(shindig => {
    return <ShindigListItem key={shindig.id} shindig={shindig} />
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
      <h1>My dashboard</h1>
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={500}
          padding={30}
          style={styles.gridList}
          >
          {shindigList}
        </GridList>
      </div>
    </div>
  )
}

export default ShindigList
