import {useContext} from 'react'
import Department from '../ContextDepartment'

export const useDepartment = () => {
  return (
    useContext(Department)
  )
}

