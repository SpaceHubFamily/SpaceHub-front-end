
var redux = require('redux')
import {provideSpaceReducer} from '../reducers/setUpReducers.js'

var initialState = {
  'test': true
  // 'venue_owner': false,
  // 'newVenueForm': {
  //   address: '',
  //   city: ''
  // }
}

console.log(initialState);

// table.increments();
// table.string('address');
// table.string('city');
// table.string('state');
// table.integer('zip_code');
// table.string('name');
// table.string('email');
// table.string('phone');
// table.string('description', [1000]);
// table.string('img_url');
// table.integer('user_id')
//   .references('users.id')
//   .onDelete('CASCADE');

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
