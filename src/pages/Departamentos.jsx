import React from "react";
import { GetDepartamentos } from "../services/department/ApiRequestDepartment";
import { useState , useEffect } from "react";
import axios from "axios";

export const Departamentos = () => {
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    GetDepartamentos()
    .then(data => setDepartamentos(data))
  }, []);

  return(<ul>
       {
        departamentos.map(depto => (
          <li key={depto.id}>{depto.nombre}</li>
          
        ))
       }
  </ul>)
};
