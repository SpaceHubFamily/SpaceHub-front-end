export var newRoomReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return [
        ...state,
        action.room
      ]
    default:
      return state
  }
}
