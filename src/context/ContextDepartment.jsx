import { useState, useEffect, createContext } from "react";
import { GetDepartamentos } from "../services/department/ApiRequestDepartment";

const Department = createContext();
const ContextDepartment = ({ children }) => {

  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState({})

  useEffect(() => {
    GetDepartamentos()
    .then(data => setDepartments(data))
  }, []);

  return <Department.Provider value={{departments, setDepartments,department, setDepartment}}>{children}</Department.Provider>;
};
export { ContextDepartment };
export default Department;
