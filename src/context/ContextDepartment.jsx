import { useState, useEffect, createContext } from "react";
import { GetDepartamentos } from "../services/department/ApiRequestDepartment";

const Department = createContext();
const ContextDepartment = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState({});
  const [charging, setCharging] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const getdeptos = await GetDepartamentos();
        setDepartments(getdeptos);
      } catch (error) {
        console.log(error)
      }

      setTimeout(() => {
        setCharging(!charging);
      }, 1000);
      
    };
   

    get();
  }, []);

  return (
    <Department.Provider
      value={{ departments, setDepartments, department, setDepartment,charging, setCharging }}
    >
      {children}
    </Department.Provider>
  );
};
export { ContextDepartment };
export default Department;
