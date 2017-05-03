import axios from 'axios'

const roomApis = {

  getOpenRooms: function() {
    return axios({
      url: 'https://spacehubapi.herokuapp.com/room/user/',
      method: 'get',
      withCredentials: true})
      .then(response => response.data.filter(item => item.room_available === true) )
  },

  getPendingRooms: function() {
    return axios({
      url: 'https://spacehubapi.herokuapp.com/user/shindig/4',
      method: 'get',
      withCredentials: true })
      .then(response => console.log(response.data))
  },

  getAllShindigs: function() {
   return axios.get('https://spacehubapi.herokuapp.com/shindig')
    .then(response => response.data)
  },
}

export default roomApis
