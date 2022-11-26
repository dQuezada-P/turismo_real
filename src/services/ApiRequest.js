import axios from 'axios'

export const HttpGet = (endpoint, token) => {
    try {
        return axios.get('http://52.91.212.222:3000/api' + endpoint, { headers: { authorization: token } })
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }
}

export const HttpPost = (endpoint, data, token = null) => {
    try {
        return axios.post('http://52.91.212.222:3000/api' + endpoint, data, { headers: { authorization: token } })
        .then(response =>{ return response.data})
    } catch (error) {
        console.log(error)
    }
}

export const HttpPut = (endpoint, data, token = null) => {
    try {
        return axios.put('http://52.91.212.222/api' + endpoint, data, { headers: { authorization: token } })
        .then(response =>{ return response.data })
    } catch (error) {
        console.log(error)
    }
}

// export const HttpPostFile = (endpoint, data, token = null) => {
//     try {
//         return axios.post('http://localhost:3000/api' + endpoint, data, { 
//             headers: { 
//                 authorization: token,
//                 'Accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//             } 
//         })
//         .then(response =>{ return response.data})
//     } catch (error) {
//         console.log(error)
//     }
// }


