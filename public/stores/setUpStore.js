
var redux = require('redux')
import {newVenueReducer} from '../reducers/newVenueReducers.js'

export var configure = (initialState = {}) => {
  var reducers = redux.combineReducers({
    venues: newVenueReducer,
  });

  var store = redux.createStore(reducers, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
