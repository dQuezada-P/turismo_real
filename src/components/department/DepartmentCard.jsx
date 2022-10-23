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
    ESTADO_RESERVA,
  } = depto;
  console.log(ESTADO_RESERVA);
  const newValorArriendo = Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
  }).format(VALOR_ARRIENDO);

  const firstImage = IMAGENES ? IMAGENES[0].url : "";

  return (
    <>
      <NavLink
        className="h-64 block overflow-hidden"
        to={`/departamento/${ID}`}
      >
        <img
          className="object-cover w-full rounded-t-3xl h-full"
          crossOrigin="Anonymous"
          src={firstImage}
          alt="imagen"
        />
      </NavLink>
      <h3 className="font-semibold text-2xl ml-3 py-2">
        {newValorArriendo} CLP
      </h3>
      <div className="flex flex-row">
        <h4 className=" basis-2/5 font-semibold mx-4 gap-40 ">
          {UBICACION}{" "}
        </h4>
        <h3 className="basis-3/5 font-bold text-center text-purple-600">
          {ESTADO_RESERVA == "Y" ? "Disponible" : "Reservado"}
        </h3>
      </div>

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
