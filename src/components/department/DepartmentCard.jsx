import { NavLink } from "react-router-dom";
import { MdBathtub, IoBedSharp } from "react-icons/all";

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
    IMAGENES,
  } = depto;

  return (
    <>
      <NavLink className="" to={`/departamento/${ID}`}>
        {!IMAGENES ? (<img className="w-full h-auto" src="" alt="IMAGE" /> ): (<img className="w-full h-3/5 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl rounded-t-3xl  " src={IMAGENES[0].url} alt="IMAGE" />)}
      </NavLink>
      <h3 className="font-semibold text-2xl ml-3 h-1/6 ">
        ${VALOR_ARRIENDO} CLP
      </h3>
      <h4 className="font-semibold text-lg ml-3  h-auto">{UBICACION}</h4>
      <div className="flex h-auto">
        <div className="basis-1/4">
          <h4 className="flex gap-2 justify-center items-center text-2xl font-semibold ">
            {NUMERO_HABITACION}
            <span>
              <IoBedSharp />
            </span>
          </h4>
        </div>
        <div className="basis-1/4">
          <h4 className="flex gap-2 justify-center items-center text-2xl font-semibold">
            {NUMERO_BANNO}
            <span>
              {" "}
              <MdBathtub />
            </span>
          </h4>
        </div>
        <div className="basis-2/4">
          <h4 className="flex text-base font-semibold justify-center h-full items-center">
            {NOMBRE}
            <span></span>
          </h4>
        </div>
      </div>
    </>
  );
};
