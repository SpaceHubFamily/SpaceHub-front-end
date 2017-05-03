import axios from 'axios'

const roomApis = {

  getOpenRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/room/user/4')
      .then(response => response.data.filter(item => item.event_planner === true) )
  },

  getAllShindigs: function() {
    return axios.get('https://spacehubapi.herokuapp.com/shindig')
      .then(response => response.data.filter(item => item.venue_owner === true) )
  }

}

export default roomApis
