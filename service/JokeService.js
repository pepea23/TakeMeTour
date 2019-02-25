import api from './../utils/ApiTest'

const jokes = {
  getJokebyId: async (id, user) => {
    let res = await api.get(`${id}?firstName=${user.firstName}&lastName=${user.firstName}`)
    return res
  },
  getRandomJoke: async (user) => {
    let res = await api.get(`random?firstName=${user.firstName}&lastName=${user.firstName}`)
    return res
  }

}
export default jokes
