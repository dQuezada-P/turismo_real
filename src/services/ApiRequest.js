import axios from 'axios'

export const HttpGet = (url) => {
    try {
        return axios.get('http://localhost:3000/api' + url)
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }

}