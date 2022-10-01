import { HttpGet } from '../ApiRequest'


export const GetDepartamentos = (token) => {
    return HttpGet('/departamento/all', token)
}

export const GetDepartamento = id => {
    return HttpGet(`/departamento/?id=${id}`)
}