import axios from 'axios'

const roomApis = {

  getRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/')
      .then(response => console.log(response.data))
  }

}

export default roomApis
