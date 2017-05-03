import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ShindigListItem from './shindig_list_item.js'

const ShindigList = (props) => {
  const shindigs = props.shindigs
  const shindigList = shindigs.map(shindig => {
    return <ShindigListItem key={shindig.id} shindig={shindig} />
  })

  return (
    <div className="roomList">
      <h1>My dashboard</h1>
      <ul>
        {shindigList}
      </ul>
    </div>
  )
}

export default ShindigList
