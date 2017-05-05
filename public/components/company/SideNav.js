import React, { Component } from 'react';
import MaterialUi, {Avatar, Divider, RaisedButton, Drawer, MenuItem } from 'material-ui';
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
            <Divider />
          </div>
          <div className="menu">
            <NavLink exact activeClassName="active" to='/company'><MenuItem>My dashboard</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/company/new-room'><MenuItem>New Room</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/company/new-venue'><MenuItem>New Venue</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/company/schedule'><MenuItem>Schedule</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/company/my-venues'><MenuItem>My venues/rooms</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/user'><MenuItem>User view</MenuItem></NavLink>
            <Divider />
            <NavLink exact activeClassName="active" to='/'><MenuItem>Sign out</MenuItem></NavLink>
            <Divider />
         </div>
      </div>
    </Drawer>
    )
  }
}
