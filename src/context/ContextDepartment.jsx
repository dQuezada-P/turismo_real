import { useState, useEffect, createContext } from "react";
import { GetDepartamentos } from "../services/department/ApiRequestDepartment";
import { useAuth } from "./hooks/useAuth";

const Department = createContext();
const ContextDepartment = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState({});
  const [images, setImages] = useState([]);
  const [imageCharge, setImageCharge] = useState(true);
  const [charging, setCharging] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const get = async () => {
      try {
        const getdeptos = await GetDepartamentos(token);
        setDepartments(getdeptos);
      } catch (error) {
        console.log(error);
      }

      setCharging(!charging);
      
    };

    get();
  }, []);

  return (
    <Department.Provider
      value={{
        departments,
        setDepartments,
        department,
        setDepartment,
        charging,
        setCharging,
        images,
        setImages,
        imageCharge,
        setImageCharge,
      }}
    >
      {children}
    </Department.Provider>
  );
};
export { ContextDepartment };
export default Department;
