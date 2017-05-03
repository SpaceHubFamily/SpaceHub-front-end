import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

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
      <Drawer>
        <div className="sidenav">
          <div className="myInfo">
            <Avatar src="https://unsplash.it/70/70" size={50} />
            <p>My profile</p>
          </div>
          <div className="menu">
            <MenuItem>My dashboard</MenuItem>
            <MenuItem>Create New Room</MenuItem>
            <MenuItem>Schedule</MenuItem>
            <MenuItem>My venues/rooms</MenuItem>
         </div>
      </div>
    </Drawer>
    );
  }
}
