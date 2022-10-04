import { HttpGet } from '../ApiRequest'

export const getLocations = () =>{
  return HttpGet('/utils/locations')
}