import { useState, useEffect, createContext } from "react";
import { GetDepartamentos } from "../services/department/ApiRequestDepartment";
import { useAuth } from "./hooks/useAuth";

const Department = createContext();
const ContextDepartment = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState({});
  const [bkupDepartment, setBkupDepartment] = useState([]);
  const [images, setImages] = useState([]);
  const [imageCharge, setImageCharge] = useState(true);
  const [charging, setCharging] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const get = async () => {
      try {
        const getdeptos = await GetDepartamentos(token);
        setDepartments(getdeptos);
        setBkupDepartment(getdeptos);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCharging(!charging);
      }, [1000]);
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
        bkupDepartment,
        setBkupDepartment,
      }}
    >
      {children}
    </Department.Provider>
  );
};
export { ContextDepartment };
export default Department;
