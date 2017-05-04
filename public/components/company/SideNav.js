import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import NavLink from 'react-router-dom/NavLink'
import CompanyDashboard from './company_dashboard'
import NewRoomForm from './newRoomForm'

let style={
  fontSize: 20,
  letterSpacing: 5,
  fontFamily: 'Merriweather'
}

export default class DrawerSimpleExample extends Component {

  constructor(props) {
    super(props);
    this.state = {open: open};
  }

  handleToggle() {
     this.setState({open: !this.state.open});
  }

  render() {
    return (
      <Drawer style = {style}>
        <div className="sidenav">
          <div className="myInfo">
            <Avatar src="https://unsplash.it/70/70" size={60} />
            <h4>My profile</h4>
          </div>
          <div className="menu">
            <MenuItem><NavLink exact activeClassName="active" to='/company'>My dashboard</NavLink></MenuItem>
            <MenuItem><NavLink activeClassName="active" to='/company/new-room'>Create New Room</NavLink></MenuItem>
            <MenuItem><NavLink activeClassName="active" to='/company/schedule'>Schedule</NavLink></MenuItem>
            <MenuItem><NavLink activeClassName="active" to='/company/my-venues'>My venues/rooms</NavLink></MenuItem>
         </div>
      </div>
    </Drawer>
    );
  }
}
