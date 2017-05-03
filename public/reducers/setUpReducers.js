
export var provideSpaceReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PROVIDE_SPACE':
      return !state;
    default:
      return state;
  }
};
