import { useEffect } from "react";
import DesignSecondary from "../components/body/DesignSecondary";
import Login from "./Login";
import { useDepartment } from "../context/hooks/useDepartment";
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { MdOutlineChair } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { useAuth } from "../context/hooks/useAuth";

export const Reserva = () => {

  const { department, images } = useDepartment()
  const { user } = useAuth()
  const { ID,
    NOMBRE,
    NUMERO_BANNO,
    NUMERO_HABITACION,
    FECHA_INS,
    DIRECCION,
    VALOR_ARRIENDO,
    UBICACION,
    DESCRIPCION,
    IMAGENES, } = department
  //console.log(user)
  const newValorArriendo = Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
  }).format(VALOR_ARRIENDO);

  console.log(department)

  return (
    <>
      <DesignSecondary>
        {" "}
        <div className="BoxContent h-[81.5vh]">
          <div className="BoxCardReservation bg-white h-[80%] w-[50%] absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-2 shadow-[0px_15px_15px_rgba(0,0,0,0.5)] rounded-3xl">
            <div className="BoxFlex flex flex-col md:flex-row w-full h-[90%] pt-4 px-4">
              <div className="BoxUser basis-[60%] h-full">
                {/* <Login></Login> */}
                {/* Recuadro Izquierdo*/}

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="">RUT:</label>
                    <input disabled value={`${user.RUT}`} className="w-min border-b border-black" type="text" />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="">Nombre Completo: </label>
                    <input disabled value={`${user.NOMBRE}  ${user.APELLIDO}`} className="w-min border-b border-black" type="text" />
                  </div>

                  <div className="flex flex-col">
                    <label className="" htmlFor="">Correo electronico: </label>
                    <input value={`${user.CORREO}`} className="w-min border-b border-black" type="text" />
                  </div>

                  <div className="flex flex-col">
                    <label className="" htmlFor="">Telefono: </label>
                    <input value={`${user.TELEFONO}`} className="w-min border-b border-black" type="text" />
                  </div>
                </div>
              </div>


              {/* Recuadro Derecho*/}
              <div className="BoxResumary basis-[40%] h-full border-t-[1px] md:border-l-[1px] md:border-t-[0px] flex flex-col items-start justify-center border-slate-300 ">

                <img className="w-20 h-20" src={IMAGENES[0].url} alt="" />

                <h5 className="flex capitalize items-center text-center mx-auto w-11/12 p-2">
                  Datos del Arriendo
                </h5>

                <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2  ">
                  <IoBedOutline />
                  <span>
                    {NUMERO_HABITACION > 1 ? `${NUMERO_HABITACION} Habitaciones` : `${NUMERO_HABITACION} habitación`}
                  </span>
                </h3>

                <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2 ">
                  <TbBath />
                  <span>
                    {NUMERO_BANNO > 1 ? `${NUMERO_BANNO} Baños` : `${NUMERO_BANNO} Baño`}
                  </span>
                </h3>

                <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2">
                  <span>
                    <BsBuilding />
                  </span>
                  {NOMBRE}
                </h3>

                <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2">
                  <MdOutlineChair />
                  <span>
                    {DESCRIPCION}
                  </span>
                </h3>

                <h3 className="flex lowercase  gap-2 items-center mx-auto w-11/12 p-2">
                  <span>
                    <BiMap />
                  </span>
                  {DIRECCION}, {UBICACION}
                </h3>

                <h3 className=" flex-col capitalize gap-4 items-center mx-auto w-11/12 p-2">
                  Precio total:  {newValorArriendo}
                </h3>

                <h6 className="flex-col capitalize gap-4 items-center mx-auto w-11/12 p-2">
                  Abono del Arriendo:
                </h6>
              </div>
            </div>
            <button className="Butto bg-purple-600 flex h-auto w-11/12 md:w-1/4 mx-auto mt-4 px-4 py-2 justify-center  hover:bg-purple-700 font-semibold hover:text-white uppercase rounded-2xl" onClick={null}>Proceder a Pagar</button>
          </div>
        </div>
      </DesignSecondary>
    </>
  );
};
