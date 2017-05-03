import axios from 'axios'

const roomApis = {

  getOpenRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/room/user/4')
      .then(response => response.data.filter(item => item.room_available === true) )
  },

  getPendingRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/shindig/user/4')
      .then(response => console.log(response.data))
  }
}

export default roomApis
