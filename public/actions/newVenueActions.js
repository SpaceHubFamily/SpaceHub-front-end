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
//   .onDelete('CAS

export var addNewVenue = (venue) => {
  return {
    type: 'ADD_VENUE',
    venue
  }
}

// export var addNewVenueCity = (venueCity) => {
//   return {
//     type: 'VENUE_CITY',
//     venueCity
//   }
// }
//
// export var addNewVenueState = (venueState) => {
//   return {
//     type: 'VENUE_STATE',
//     venueState
//   }
// }
//
// export var addNewVenueZipCode = (venueZipCode) => {
//   return {
//     type: 'VENUE_ZIPCODE',
//     venueZipCode
//   }
// }
//
// export var addNewVenueName = (venueName) => {
//   return {
//     type: 'VENUE_NAME',
//     venueName
//   }
// }
//
// export var addNewVenueEmail = (venueEmail) => {
//   return {
//     type: 'VENUE_EMAIL',
//     venueEmail
//   }
// }
//
// export var addNewVenuePhone = (venuePhone) => {
//   return {
//     type: 'VENUE_PHONE',
//     venuePhone
//   }
// }
//
// export var addNewVenueDiscription = (venueDiscription) => {
//   return {
//     type: 'VENUE_DISCRIPTION',
//     venueDiscription
//   }
// }
//
// export var addNewVenueImgUrl = (venueImgUrl) => {
//   return {
//     type: 'VENUE_IMG_URL',
//     venueImgUrl
//   }
// }
//
// export var addNewVenueImgUrl = (venueUserId) => {
//   return {
//     type: 'VENUE_USER_ID',
//     venueUserId
//   }
// }









//
