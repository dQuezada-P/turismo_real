import { useEffect, useState } from "react";
import DesignSecondary from "../components/body/DesignSecondary";
import { useDepartment } from "../context/hooks/useDepartment";
import { IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { MdOutlineChair } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { useAuth } from "../context/hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Reserva = () => {
  const { id } = useParams();
  const { department, images, setDepartment, imageCharge, setImageCharge } =
    useDepartment();
  const [date, setDate] = useState(new Date());
  const [flag, setFlag] = useState(true);
  const { user } = useAuth();
  const [cliente, setCliente] = useState({
    rut: user.RUT,
    nombre: `${user.NOMBRE} ${user.APELLIDO}`,
    correo: user.CORREO,
    tel: user.TELEFONO,
  });
  const [arriendo, setArriendo] = useState({
    id: "",
    nombre: "",
    fecha: new Date(),
    dias: "",
    cantPersonas: "",
    abono: "",
    valor: "",
    img: "",
  });

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
  } = department;

  const formatPeso = (value) => {
    return Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(value);
  };

  useEffect(() => {
    const getDept = async () => {
      const dept = await GetDepartamento(id);
      setDepartment(dept);
      setImageCharge(false);
      setArriendo({
        ...arriendo,
        id: dept.ID,
        nombre: dept.NOMBRE,
        valor: dept.VALOR_ARRIENDO,
        img: dept.IMAGENES[0].url,
      });
    };

    getDept();
  }, []);
  const newValorArriendo = formatPeso(VALOR_ARRIENDO);
  const abono = formatPeso(VALOR_ARRIENDO * 0.2);
  if (imageCharge) return <div></div>;

  const handleOnChangeDate = (e) => {
    setDate(e);
    setArriendo({ ...arriendo, fecha: date });
  };
  const handleOnChangeTel = (e) => {
    setCliente({ ...cliente, tel: e.target.value });
  };

  const handleOnChangeCorreo = (e) => {
    setCliente({ ...cliente, correo: e.target.value });
  };
  const handleOnChangeDias = (e) => {
    setArriendo({ ...arriendo, dias: e.target.value });
  };

  const handleOnChangeCantP = (e) => {
    setArriendo({ ...arriendo, cantPersonas: e.target.value });
  };

  const handleOnclick = async () => {
    arriendo.abono = abono;
    const data = {
      cliente: cliente,
      arriendo: arriendo,
    };
    try {
      if (flag) {
        const result = await axios.post(
          "http://localhost:3000/api/mercadopago",
          data
        );
        const mp = new MercadoPago(
          "TEST-09d711eb-afb7-405b-bed2-7f54177a7dc2",
          {
            locale: "es-CL",
          }
        );
        mp.checkout({
          preference: {
            id: result.data,
          },
          render: {
            container: ".cho-container",
            label: "Pagar",
          },
        });
        setFlag(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <DesignSecondary>
        {" "}
        <div className="BoxContent h-screen md:h-[81.5vh]">
          <div className="BoxCardReservation bg-white h-[80%] w-[50%] absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-2 shadow-[0px_15px_15px_rgba(0,0,0,0.5)] rounded-3xl">
            <div className="BoxFlex flex flex-col md:flex-row w-full h-[90%] pt-4 px-4">
              <div className="BoxUser basis-[60%] h-full">
                {/* <Login></Login> */}
                {/* Recuadro Izquierdo*/}

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="">RUT:</label>
                    <input
                      disabled
                      value={`${user.RUT}`}
                      className="w-min border-b border-black"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="">Nombre Completo: </label>
                    <input
                      disabled
                      value={`${user.NOMBRE}  ${user.APELLIDO}`}
                      className="w-min border-b border-black"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="" htmlFor="">
                      Correo electronico:{" "}
                    </label>
                    <input
                      placeholder={user.CORREO}
                      value={cliente.correo}
                      onChange={handleOnChangeCorreo}
                      className="w-min border-b border-black"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="" htmlFor="">
                      Telefono:{" "}
                    </label>
                    <input
                      placeholder={user.TELEFONO}
                      value={cliente.tel}
                      onChange={handleOnChangeTel}
                      className="w-min border-b border-black"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="" htmlFor="">
                      Fecha:{" "}
                    </label>
                    <DatePicker
                      className="border-b border-black"
                      selected={date}
                      onSelect={(e) => {
                        date;
                      }}
                      onChange={handleOnChangeDate}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="" htmlFor="">
                      Dias:{" "}
                    </label>
                    <input
                      value={arriendo.dias}
                      onChange={handleOnChangeDias}
                      className="w-min border-b border-black"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="" htmlFor="">
                      Personas Invitadas:{" "}
                    </label>
                    <input
                      value={arriendo.cantPeronas}
                      onChange={handleOnChangeCantP}
                      className="w-min border-b border-black"
                      type="text"
                    />
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
                    {NUMERO_HABITACION > 1
                      ? `${NUMERO_HABITACION} Habitaciones`
                      : `${NUMERO_HABITACION} habitación`}
                  </span>
                </h3>

                <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2 ">
                  <TbBath />
                  <span>
                    {NUMERO_BANNO > 1
                      ? `${NUMERO_BANNO} Baños`
                      : `${NUMERO_BANNO} Baño`}
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
                  <span>{DESCRIPCION}</span>
                </h3>

                <h3 className="flex lowercase  gap-2 items-center mx-auto w-11/12 p-2">
                  <span>
                    <BiMap />
                  </span>
                  {DIRECCION}, {UBICACION}
                </h3>

                <h3 className=" flex-col capitalize gap-4 items-center mx-auto w-11/12 p-2">
                  Valor Arriendo: {newValorArriendo}
                </h3>

                <h6 className="flex-col capitalize gap-4 items-center mx-auto w-11/12 p-2">
                  Abono del 20%:{" "}
                  <span className="text-2xl font-semibold">{abono}</span>
                </h6>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="basis-3/5">
                <button
                  className="Butto bg-purple-600 flex h-auto w-1/2  mx-auto  px-4 py-2 justify-center  hover:bg-purple-700 font-semibold text-white uppercase rounded-2xl "
                  onClick={handleOnclick}
                >
                  Solicitar Reserva
                </button>
              </div>

              <div className="cho-container w-1/2 basis-2/5 flex justify-center"></div>
            </div>
          </div>
        </div>
      </DesignSecondary>
    </>
  );
};
