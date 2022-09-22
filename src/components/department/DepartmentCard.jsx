import {NavLink} from 'react-router-dom'
import { MdBathtub,IoBedSharp } from "react-icons/all";


export const DepartmentCard = ({ depto }) => {
  const {
    id,
    nombre,
    numero_banno,
    numero_Habitacion,
    fecha,
    direccion,
    valor_arriendo,
    ubicacion,
    descripcion,
  } = depto;

  return (
    <>
      <NavLink className='' to={`/departamento/${id}`}><img src="" alt="imagen" /></NavLink>
      <h3 className='font-semibold text-2xl ml-3 py-2'>${valor_arriendo} CLP</h3>
      <h4 className='font-semibold ml-3 py-2'>{ubicacion}</h4>
      <div className='flex justify-around py-2 '>
        <div>
        <h4 className="flex gap-2 items-center text-2xl font-semibold ">
          {numero_Habitacion}
          <span>
            <IoBedSharp />
          </span>
        </h4>
        </div> 
        <div>
        <h4 className="flex gap-2 items-center text-2xl font-semibold">
          {numero_banno}
          <span>
            {" "}
            <MdBathtub />
          </span>
        </h4>
        </div>
        <div>
        <h4 className="flex text-lg font-semibold">
          {nombre}
          <span></span>
        </h4>
        </div>
      </div>
    </>
  );
};
