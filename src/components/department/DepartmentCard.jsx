import { NavLink } from "react-router-dom";
import { MdBathtub, IoBedSharp, DiFsharp } from "react-icons/all";

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

  const newValorArriendo = Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(VALOR_ARRIENDO)

  const firstImage = IMAGENES ? (
    IMAGENES[0].url
  ) : "";
  return (
    <>
      <NavLink className="h-64 block" to={`/departamento/${ID}`}>
        <img className=" object-cover w-full object-center h-full rounded-t-3xl" crossOrigin="Anonymous" src={firstImage} alt="imagen" />
      </NavLink>
      <h3 className="font-semibold text-2xl ml-3 py-2">
        {newValorArriendo} CLP
      </h3>
      <h4 className="font-semibold ml-3 py-2">{UBICACION}</h4>
      <div className="flex justify-center py-2 ">
        <div className="basis-1/5">
          <h4 className="flex gap-1 justify-center items-center text-2xl font-semibold ">
            {NUMERO_HABITACION}
            <span>
              <IoBedSharp />
            </span>
          </h4>
        </div>
        <div className="basis-1/5">
          <h4 className="flex gap-1 px-1 justify-center items-center text-2xl font-semibold">
            {NUMERO_BANNO}
            <span>
              {" "}
              <MdBathtub />
            </span>
          </h4>
        </div>
        <div className="basis-1/2">
          <h4 className="flex text-base font-semibold justify-center h-full items-center uppercase text-center">
            {NOMBRE}
            <span></span>
          </h4>
        </div>
      </div>
    </>
  );
};
