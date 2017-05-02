import React from 'react';
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

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Header = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleTouchTap={handleTouchTap}
    // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    // iconElementRight={<div><FlatButton label="Log In" /><FlatButton label="SignUp" /></div>}
    iconElementRight={<div class="nav-btns"><FlatButton label="Log In" /><FlatButton label="SignUp" /></div>}
  />
);

export default Header;