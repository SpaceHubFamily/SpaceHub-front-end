import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roomApis from '../utils/api'
import ShindigList from './shindig_list.js'
import ShindigListItem from './shindig_list_item.js'

class UserDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shindigs: []
    }
  }
  componentDidMount() {
    roomApis.getAllShindigs()
    .then(shindigs =>
      this.setState({ shindigs })
    )
  }
  render() {
    return (
      <div>
        <ShindigList shindigs = {this.state.shindigs} />
      </div>
    )
  }

}

export default UserDashboard;
