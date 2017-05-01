import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TestComponent from './TestComponent.js';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <TestComponent />
  </MuiThemeProvider>
);

export default App;
