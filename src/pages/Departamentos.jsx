import React from 'react'
import { GetDepartamentos } from '../utils/ApiRequestDepartamento'

export const Departamentos = async () => {
  const departamentos = await GetDepartamentos()
  console.log(departamentos)

  return (
    <ul>
      {
        departamentos
          .map(depto =>
            <li key={depto.id}>{depto.name}</li>
          )
      }
    </ul>
  )
}

