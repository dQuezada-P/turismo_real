import axios from 'axios'

export const HttpGet = (endpoint, token) => {
    try {
        return axios.get('http://localhost:3000/api' + endpoint, { headers: { authorization: token } })
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }
}

export const HttpPost = (endpoint, data, token = null) => {
    try {
        return axios.post('http://localhost:3000/api' + endpoint, data, { headers: { authorization: token } })
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }
}

