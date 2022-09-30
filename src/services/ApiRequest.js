import axios from 'axios'

export const HttpGet = (endpoint) => {
    try {
        return axios.get('http://localhost:3000/api' + endpoint, { headers: {"x-access-token": localStorage.getItem('token')} })
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }
}

export const HttpPost = (endpoint, data) => {
    try {
        return axios.post('http://localhost:3000/api' + endpoint, data)
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }
}
