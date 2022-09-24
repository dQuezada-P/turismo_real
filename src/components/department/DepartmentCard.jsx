import {NavLink} from 'react-router-dom'
import { MdBathtub,IoBedSharp } from "react-icons/all";


export const DepartmentCard = ({ depto }) => {
  const {
    ID,
    NOMBRE,
    NUMERO_BANNO,
    NUMERO_HABITACION,
    FECHA_INS,
    DIRECCION,
    VALOR_ARRIENDO,
    UBICACION,
    DESCRIPCION,
  } = depto;
  

  return (
    <>
      <NavLink className='' to={`/departamento/${ID}`}><img src="" alt="imagen" /></NavLink>
      <h3 className='font-semibold text-2xl ml-3 py-2'>${VALOR_ARRIENDO} CLP</h3>
      <h4 className='font-semibold ml-3 py-2'>{UBICACION}</h4>
      <div className='flex justify-around py-2 '>
        <div>
        <h4 className="flex gap-2 items-center text-2xl font-semibold ">
          {NUMERO_HABITACION}
          <span>
            <IoBedSharp />
          </span>
        </h4>
        </div> 
        <div>
        <h4 className="flex gap-2 items-center text-2xl font-semibold">
          {NUMERO_BANNO}
          <span>
            {" "}
            <MdBathtub />
          </span>
        </h4>
        </div>
        <div>
        <h4 className="flex text-lg font-semibold">
          {NOMBRE}
          <span></span>
        </h4>
        </div>
      </div>
    </>
  );
};
