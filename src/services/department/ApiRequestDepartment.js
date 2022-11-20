import { HttpGet } from '../ApiRequest'


export const getDepartamentos = () => {
    return HttpGet('/departamento/all')
}

export const GetDepartamento = id => {
    return HttpGet(`/departamento/?id=${id}`)
}