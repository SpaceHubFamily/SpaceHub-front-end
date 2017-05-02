import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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
      <div className="sidenav">
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer open={this.state.open}>
          <div>
            <p>Company profile</p>
          </div>
          <div>
            <MenuItem>My dashboard</MenuItem>
            <MenuItem>Create New Room</MenuItem>
            <MenuItem>Schedule</MenuItem>
            <MenuItem>My venues/rooms</MenuItem>
         </div>

        </Drawer>
      </div>
    );
  }
}
