import axios from 'axios'

export const HttpGet =  (url) => {
    axios.get(url)
    .then(response =>{ return response.data})
    
}