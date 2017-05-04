import axios from 'axios'

const roomApis = {

  getOpenRooms: function() {
   return axios.get('https://spacehubapi.herokuapp.com/room/user/4')
    .then(response => response.data.filter(item => item.room_available === true) )
  },

  // getOpenRooms: function() {
  //   return axios({
  //     url: 'https://spacehubapi.herokuapp.com/room/user/4',
  //     method: 'get',
  //     withCredentials: true})
  //     .then(response => response.data.filter(item => item.room_available === true) )
  // },
  getPendingRooms: function() {
   return axios.get('https://spacehubapi.herokuapp.com/shindig_request/4')
    .then(response => response.data)
  },

  getConfirmedRooms: function() {
    return axios.get('https://spacehubapi.herokuapp.com/user/shindig/4')
      .then(response => response.data)
  },
  // getPendingRooms: function() {
  //   return axios({
  //     url: 'https://spacehubapi.herokuapp.com/user/shindig/4',
  //     method: 'get',
  //     withCredentials: true })
  //     .then(response => response.data)
  // },

  getAllShindigs: function() {
   return axios.get('https://spacehubapi.herokuapp.com/shindig/user/1')
    .then(response => response.data.filter(item => item.shindig_available === true) )
  },

  getConfirmedShindigs: function() {
   return axios.get('https://spacehubapi.herokuapp.com/user/shindig/1')
    .then(response => response.data )
  },

  getPendingShindigs: function() {
   return axios.get('https://spacehubapi.herokuapp.com/shindig_request/user/4')
    .then(pendingShindig => {
      const shindigs = pendingShindig.data
      const id = shindigs
      const getUsers = []
      for(let i = 0; i < shindigs.length; i++) {
        const id = shindigs[i].owner_id
        getUsers.push(
            axios.get(`https://spacehubapi.herokuapp.com/user/${id}`)
            .then(owner => ({
              owner:owner.data[0],
              shindig:shindigs[i]
            }))
        )
      }
      return Promise.all(getUsers)
    })


  },
}

export default roomApis
