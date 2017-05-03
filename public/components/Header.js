import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <AppBar
    title={<span className="nav-title">SpaceHub</span>}
    // title={<span style={styles.title}>SpaceHub</span>}
    onTitleTouchTap={handleTouchTap}
    showMenuIconButton={false}
    iconElementRight={<div className="nav-btns"><Link to="/company"><FlatButton label="Log In" /></Link><Link to="/user"><FlatButton label="Sign Up" /></Link></div>}
  />
);

export default Header;
