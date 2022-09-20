import React from 'react'
<<<<<<< HEAD

export const Departamentos = () => {
  return (
    <div></div>
  )
}
=======
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

>>>>>>> 262624868e05fa57347e724b32200ed4f68f5519
