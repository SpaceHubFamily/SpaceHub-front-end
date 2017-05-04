import React, { Component } from 'react';
import MaterialUi, {Avatar, Divider, RaisedButton, Drawer, MenuItem } from 'material-ui';
import NavLink from 'react-router-dom/NavLink'
import CompanyDashboard from './user_dashboard'

let style={
  fontSize: 20,
  letterSpacing: 5,
  fontFamily: 'Merriweather'
}

export default class DrawerSimpleExample extends React.Component {

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
            <Avatar src="http://youqueen.com/wp-content/themes/RoyalMasonry/images/haircuts/square-celebrity-2.png" size={60} />
            <h4>My profile</h4>
            <Divider />
          </div>
          <div className="menu">
            <NavLink exact activeClassName="active" to='/user'><MenuItem>My Dashboard</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/user/confirmed'><MenuItem>Confirmed Events</MenuItem></NavLink>
            <Divider />
            <NavLink activeClassName="active" to='/user/pending'><MenuItem>Pending Events</MenuItem></NavLink>
            <Divider />
          </div>
        </div>
      </Drawer>
    );
  }
}
