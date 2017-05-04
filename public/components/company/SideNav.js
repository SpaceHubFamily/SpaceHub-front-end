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
            <MenuItem><NavLink exact activeClassName="active" to='/company'>My dashboard</NavLink></MenuItem>
            <Divider />
            <MenuItem><NavLink activeClassName="active" to='/company/new-room'>New Room</NavLink></MenuItem>
            <Divider />
            <MenuItem><NavLink activeClassName="active" to='/company/new-venue'>New Venue</NavLink></MenuItem>
            <Divider />
            <MenuItem><NavLink activeClassName="active" to='/company/schedule'>Schedule</NavLink></MenuItem>
            <Divider />
            <MenuItem><NavLink activeClassName="active" to='/company/my-venues'>My venues/rooms</NavLink></MenuItem>
            <Divider />
         </div>
      </div>
    </Drawer>
    );
  }
}
