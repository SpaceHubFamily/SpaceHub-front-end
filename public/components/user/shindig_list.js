import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import ShindigListItem from './shindig_list_item.js';
import Divider from 'material-ui/Divider';

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
      marginTop: '30px'
    },
    title: {
      fontSize: 20,
      letterSpacing: 5,
      fontFamily: 'Merriweather'
    },
  };

  return (
    <div className="shindigList">
      <h1>My Dashboard</h1>
      <Divider />
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={530}
          padding={50}
          style={styles.gridList}
          >
          {shindigList}
        </GridList>
      </div>
    </div>
  )
}

export default ShindigList
