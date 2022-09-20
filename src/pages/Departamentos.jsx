import React from "react";
import { GetDepartamentos } from "../utils/ApiRequestDepartamento";
import { useState , useEffect } from "react";

export const Departamentos = () => {
  const [arryDepartamentos, setarryDepartamentos] = useState([]);

  useEffect( async() => {
    const departamentos = await GetDepartamentos();
    setarryDepartamentos(departamentos);
  }, []);

  return(<ul>
       
  </ul>)
};
