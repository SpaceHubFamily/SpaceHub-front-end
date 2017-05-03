
var redux = require('redux')
// import {provideSpaceReducer} from '../reducers/setUpReducers.js'
import {newVenueReducer} from '../reducers/newVenueReducers.js'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    venues: newVenueReducer,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
