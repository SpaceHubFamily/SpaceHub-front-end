import axios from 'axios'

const roomApis = {

  getRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/room')
      .then(response => response.data)
  }

}

export default roomApis
