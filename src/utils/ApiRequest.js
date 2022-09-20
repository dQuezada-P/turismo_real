import axios from 'axios'

export const HttpGet = async (url) => {
    const result = await axios.get(url)
    return result.data
}