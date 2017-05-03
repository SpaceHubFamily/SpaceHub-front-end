// import redux from 'redux'
var redux = require('redux')
import {provideSpaceReducer} from '../reducers/setUpReducers.js'

var initialState = {
  'venue_owner': false
}

export var configure = (initialState) => {
  var reducer = redux.combineReducers({
    provideSpace: provideSpaceReducer
    // showCompleted: showCompletedReducer,
    // todos: todosReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
