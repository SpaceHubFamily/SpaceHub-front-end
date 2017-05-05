import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Login from './login'

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
const Header = ({store}) => (
  <AppBar
    title={<span className="nav-title">SpaceHub</span>}
    // title={<span style={styles.title}>SpaceHub</span>}
    onTitleTouchTap={handleTouchTap}
    showMenuIconButton={false}
    iconElementRight={<div className="nav-btns"><Login store={store}/></div>}

  />
);

export default Header;
