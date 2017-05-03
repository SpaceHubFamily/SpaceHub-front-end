import axios from 'axios'

const roomApis = {

  getOpenRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/room/user/4')
      .then(response => response.data.filter(item => item.event_planner === true) )
  }

}

export default roomApis
