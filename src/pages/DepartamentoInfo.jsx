import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDepartment } from "../context/hooks/useDepartment";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";

export const Departamento = () => {
  const { department, setDepartment } = useDepartment();
  const { id } = useParams();
  const {
    nombre,
    numero_banno,
    numero_Habitacion,
    fecha,
    direccion,
    valor_arriendo,
    ubicacion,
    descripcion,
  } = department;

  useEffect(() => {
    const getDept = async () => {
      const dept = await GetDepartamento(id);
      setDepartment(dept);
    };

    getDept();
  }, []);

  useEffect(()=>{

  }, [department]);

  return (
    <div className="container">
      
    </div>
  );
};
