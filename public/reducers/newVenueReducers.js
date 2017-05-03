
export var newVenueReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VENUE':
      return [
        ...state,
        action.venue
      ]
    default:
      return state
  }
}

// export var venueCityReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_CITY':
//       return action.venueCity;
//     default:
//       return state;
//   }
// }
//
// export var venueStateReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_STATE':
//       return action.venueState;
//     default:
//       return state;
//   }
// }
//
// export var venueZipCodeReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_ZIPCODE':
//       return action.venueZipCode;
//     default:
//       return state;
//   }
// }
//
// export var venueNameReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_NAME':
//       return action.venueName;
//     default:
//       return state;
//   }
// }
//
// export var venueEmailReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_EMAIL':
//       return action.venueEmail;
//     default:
//       return state;
//   }
// }
//
// export var venuePhoneReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_PHONE':
//       return action.venuePhone;
//     default:
//       return state;
//   }
// }
//
// export var venueDiscriptionReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_DISCRIPTION':
//       return action.venueDiscription;
//     default:
//       return state;
//   }
// }
//
// export var venueImgUrlReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_IMG_URL':
//       return action.venueImgUrl;
//     default:
//       return state;
//   }
// }
//
// export var venueUserIdReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'VENUE_USER_ID':
//       return action.venueUserId;
//     default:
//       return state;
//   }
// }
