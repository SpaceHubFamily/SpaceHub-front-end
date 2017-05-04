import axios from 'axios'

const roomApis = {

//open rooms
//by user id
  getOpenRooms: function() {
   return axios.get('http://localhost:3000/room/user/', {
     withCredentials: true
   })
    .then((response) =>
    response.data.filter(item => item.room_available === true) )
  },

  // getOpenRooms: function() {
  //   return axios({
  //     url: 'https://spacehubapi.herokuapp.com/room/user/4',
  //     method: 'get',
  //     withCredentials: true})
  //     .then(response => response.data.filter(item => item.room_available === true) )
  // },
  getPendingRooms: function() {
   return axios.get('http://localhost:3000/shindig_request/', {
     withCredentials: true
  })
    .then(response => response.data)
  },


  // getConfirmedRooms: function() {
  //   return axios.get('http://localhost:3000/user/shindig/4')
  //     .then(response => response.data)
  // },
  // getPendingRooms: function() {
  //   return axios({
  //     url: 'https://spacehubapi.herokuapp.com/user/shindig/4',
  //     method: 'get',
  //     withCredentials: true })
  //     .then(response => response.data)
  // },

  getAllShindigs: function() {
   return axios.get('http://localhost:3000/shindig/user/1')
    .then(response => response.data.filter(item => item.shindig_available === true) )
  },
}

export default roomApis
