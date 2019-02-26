import api from './../utils/ApiTest'
import { async } from 'rxjs/internal/scheduler/async'

const jokes = {
  getJokebyId: async (id, user) => {
    let res = await api.get(`${id}?firstName=${user.firstName}&lastName=${user.lastName}`)
    return res
  },
  getRandomJoke: async (user) => {
    let res = await api.get(`random?firstName=${user.firstName}&lastName=${user.lastName}`)
    return res
  },
  getRandomJokes: async (num, user) => {
    let res = await api.get(`random/${num}?firstName=${user.firstName}&lastName=${user.lastName}`)
    return res
  }

}
export default jokes
