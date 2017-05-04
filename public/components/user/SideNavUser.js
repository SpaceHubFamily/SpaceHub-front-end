import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';


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
        <div className="side-nav">
          <div className="profile">
            <h1 className="side-nav-title">SpaceHub</h1>
            <Avatar src="http://youqueen.com/wp-content/themes/RoyalMasonry/images/haircuts/square-celebrity-2.png" size={70} />
            <p>My profile</p>
          </div>
          <Divider />
          <div className="side-nav-menu">
            <MenuItem>My Dashboard</MenuItem>
            <Divider />
            <MenuItem>Confirmed Events</MenuItem>
            <Divider />
            <MenuItem>Pending Events</MenuItem>
            <Divider />
         </div>
      </div>
    </Drawer>
    );
  }
}
