import axios from 'axios'
import ENV from '../config/envConfig'

let TakeMeToUseApi = 'i want api'
const createInstance = () => {
  return axios.create({
    baseURL: ENV.TestApii,
    headers: {
      'Authorization': `Bearer ${TakeMeToUseApi}`,
      'Content-Type': 'application/json'
    }
  })
}

const handleResponse = res => !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res.data.error))

const catchError = err => {
  return Promise.reject(err)
}

export default {

  get: (path, headers = {}) => (
    createInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}
