import axios from 'axios'

export const HttpGet = (url) => {
    return axios.get('http://localhost:3000/api' + url)
    .then(response =>{ return response.data})
}