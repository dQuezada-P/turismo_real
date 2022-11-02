import { useEffect, useState } from "react";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiCash,
  HiPencilAlt,
} from "react-icons/hi";
import { useDepartment } from "../../context/hooks/useDepartment";
import { useAuth } from "../../context/hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GetDepartamento } from "../../services/department/ApiRequestDepartment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PersonalInfo } from "../reservation/components/PersonalInfo";
import { Transport } from "../reservation/components/Transport";
import { Tour } from "../reservation/components/Tour";
import { Circle } from "../reservation/components/Circle";
import { Progress } from "flowbite-react";
import { MdOutlineDirectionsBus, MdOutlineTour } from "react-icons/md";

export const Reserva = () => {
  const [page, setPage] = useState(0);
  const TitlePages = [
    "Informacion Personal",
    "Servicios Transporte",
    "Servicios Tour",
    "s",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo></PersonalInfo>;
    } else if (page === 1) {
      return <Transport></Transport>;
    } else return <Tour></Tour>;
  };

  const [circle, setCircle] = useState(3);
  const [btnActive, setBtnActive] = useState(0);
  const [widthBar, setWidthBar] = useState(0);
  const array = [];
  for (let i = 0; i <= circle; i++) {
    array.push(
      <Circle
        classname={`flex items-center justify-center rounded-[50%] h-8 w-8 transition-transform ease-in border-2 2xl:h-12 2xl:w-12 ${
          i <= btnActive
            ? "bg-purple-600 border-purple-700 text-white shadow-lg"
            : "bg-white border-gray-400"
        }`}
        key={i}
      >
        <p className="text-base 2xl:text-2xl">
          {i === 0 ? (
            <HiPencilAlt />
          ) : i === 1 ? (
            <MdOutlineDirectionsBus />
          ) : i === 2 ? (
            <MdOutlineTour />
          ) : (
            <HiCash />
          )}
        </p>
      </Circle>
    );
  }

  useEffect(() => {
    setWidthBar((100 / circle) * btnActive);
  }, [circle, btnActive]);

  const { id } = useParams();
  const { department, images, setDepartment, imageCharge, setImageCharge } =
    useDepartment();
  const [date, setDate] = useState(new Date());
  const [flag, setFlag] = useState(true);
  const { user } = useAuth();
  const [charge, setCharge] = useState();
  const [cliente, setCliente] = useState({
    rut: user.RUT,
    nombre: `${user.NOMBRE} ${user.APELLIDO}`,
    correo: user.CORREO,
    tel: user.TELEFONO,
  });
  const [arriendo, setArriendo] = useState({
    id: "",
    nombre: "",
    fecha: "",
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

  const handlePagesPrev = () => {
    setPage((currPage) => currPage - 1);
    if (btnActive <= 0) {
      setBtnActive(0);
    }
    setBtnActive(btnActive - 1);
  };

  const handlePagesNext = () => {
    setPage((currPage) => currPage + 1);
    if (btnActive >= circle) {
      setBtnActive(circle);
    }
    setBtnActive(btnActive + 1);
  };

  const newValorArriendo = formatPeso(VALOR_ARRIENDO);
  const abono = formatPeso(VALOR_ARRIENDO * 0.2);
  if (imageCharge) return <div></div>;

  const handleOnChangeDate = (e) => {
    setDate(e);
    setArriendo({ ...arriendo, fecha: e });
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
    charge == null ? setCharge(true) : null;
    console.log(date);

    arriendo.abono = abono;

    const data = {
      cliente: cliente,
      arriendo: arriendo,
    };
    console.log(data.arriendo.fecha);
    setTimeout(async () => {
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
          setCharge(false);
        }
      } catch (error) {
        console.error(error);
      }
    }, 2000);
  };

  return (
    <>
      <div className="BoxContent relative z-30 min-h-screen flex justify-center items-center  ">
        <div className="BoxMain w-[80%] h-[80%] container mx-auto sm:flex sm:flex-row shadow-xl rounded-2xl sm:mt-8 sm:mb-6 2xl:mt-12 ">
          <div className="InfoShopping bg-white basis-[70%] h-[25rem] sm:h-[35rem] 2xl:h-[50rem] rounded-t-2xl sm:rounded-tr-none sm:rounded-tl-2xl sm:rounded-bl-2xl flex flex-col font-semibold">
            <div className="basis-[15%] flex flex-col ">
              <h2 className="flex w-full basis-[50%] justify-center items-center ">
                {TitlePages[page]}
              </h2>
              <div className="w-[70%] flex flex-row items-center justify-between justify-self-stretch container mx-auto basis-[50%] lining-nums text-sm relative z-10 my-2">
                <div className={`progressBar rounded-xl`}>
                  <Progress progress={widthBar} size="sm" color="purple" />
                </div>
                {array}
              </div>
            </div>
            <div className="basis-[60%]">{PageDisplay()}</div>
            <div className="basis-[15%] flex flex-row justify-center items-center gap-10 2xl:gap-20 font-semibold border-t-2 border-purple-600 ">
              <button
                className={
                  page == 0
                    ? "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 dark:ring-gray-600 bg-gray-700 text-white rounded-lg ease-out dark:from-black dark:to-gray-600 ring-purple-500 text-sm sm:text-base 2xl:text-lg "
                    : "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 hover:ring-2 dark:ring-gray-600 bg-gray-700 text-white rounded-lg transform transition duration-100 hover:scale-105 ease-out bg-gradient-to-t from-black to-purple-600 dark:from-black dark:to-gray-600 ring-purple-500 text-sm sm:text-base 2xl:text-lg"
                }
                onClick={handlePagesPrev}
                disabled={page == 0}
              >
                {" "}
                <span className="sm:text-3xl">
                  <HiArrowSmLeft />
                </span>{" "}
                Atras{" "}
              </button>

              <button
                className={
                  page == TitlePages.length - 1
                    ? "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 dark:ring-gray-600 bg-gray-700 text-white rounded-lg ease-out dark:from-black dark:to-gray-600 ring-purple-500 text-sm sm:text-base 2xl:text-lg "
                    : "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 hover:ring-2 dark:ring-gray-600 bg-gray-700 text-white rounded-lg transform transition duration-100 hover:scale-105 ease-out bg-gradient-to-t from-black to-purple-600 dark:from-black dark:to-gray-600 ring-purple-500 text-sm sm:text-base 2xl:text-lg"
                }
                onClick={handlePagesNext}
                disabled={page == TitlePages.length - 1}
              >
                Siguiente
                <span>
                  <HiArrowSmRight className="sm:text-3xl" />
                </span>
              </button>
            </div>
          </div>
          <div className="InfoSummary bg-white basis-[30%] h-[25rem] sm:h-[35rem] 2xl:h-[50rem] flex flex-col rounded-b-2xl sm:rounded-bl-none sm:rounded-tr-2xl sm:rounded-br-2xl  ">
            <div className="basis-[15%] flex items-center justify-center underline underline-offset-4 dark:decoration-gray-800 ">
              <h2 className="font-semibold dark:text-gray-800 uppercase">
                Resumen de la orden
              </h2>
            </div>
            <div className="bg-red-600 basis-[60%]">Products</div>
            <div className="bg-red-800 basis-[15%]">Total</div>
          </div>
        </div>
      </div>
    </>
    // <>
    //     <div className="BoxContent min-h-screen">
    //       <div className="BoxCardReservation bg-white h-[80%] w-[50%] absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-2 shadow-2xl rounded-3xl">
    //         <div className="BoxFlex flex flex-col md:flex-row w-full h-[90%] pt-4 px-4">
    //           <div className="BoxUser basis-[60%] h-full"></div>
    //             {/* <Login></Login> */}
    //             {/* Recuadro Izquierdo*/}

    //           {/* Recuadro Derecho*/}
    //           <div className="BoxResumary basis-[40%] h-full border-t-[1px] md:border-l-[1px] md:border-t-[0px] flex flex-col items-start justify-center border-slate-300 ">
    //             <img className="w-20 h-20" src={IMAGENES[0].url} alt="" />

    //             <h5 className="flex capitalize items-center text-center mx-auto w-11/12 p-2">
    //               Datos del Arriendo
    //             </h5>

    //             <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2  ">
    //               <IoBedOutline />
    //               <span>
    //                 {NUMERO_HABITACION > 1
    //                   ? `${NUMERO_HABITACION} Habitaciones`
    //                   : `${NUMERO_HABITACION} habitación`}
    //               </span>
    //             </h3>

    //             <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2 ">
    //               <TbBath />
    //               <span>
    //                 {NUMERO_BANNO > 1
    //                   ? `${NUMERO_BANNO} Baños`
    //                   : `${NUMERO_BANNO} Baño`}
    //               </span>
    //             </h3>

    //             <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2">
    //               <span>
    //                 <BsBuilding />
    //               </span>
    //               {NOMBRE}
    //             </h3>

    //             <h3 className="flex capitalize gap-4 items-center mx-auto w-11/12 p-2">
    //               <MdOutlineChair />
    //               <span>{DESCRIPCION}</span>
    //             </h3>

    //             <h3 className="flex lowercase  gap-2 items-center mx-auto w-11/12 p-2">
    //               <span>
    //                 <BiMap />
    //               </span>
    //               {DIRECCION}, {UBICACION}
    //             </h3>

    //             <h3 className=" flex-col capitalize gap-4 items-center mx-auto w-11/12 p-2">
    //               Valor Arriendo: {newValorArriendo}
    //             </h3>

    //             <h6 className="flex-col capitalize border border-red-500 gap-4 items-center mx-auto w-11/12 p-2">
    //               Abono del 20%:{" "}
    //               <span className="text-2xl font-semibold">{abono}</span>
    //             </h6>
    //           </div>
    //         </div>
    //         <div className="flex flex-row items-center justify-center">
    //           <div className="basis-3/5">
    //             <button
    //               className="Butto bg-purple-600 flex h-auto w-1/2  mx-auto  px-4 py-2 justify-center  hover:bg-purple-700 font-semibold text-white uppercase rounded-2xl "
    //               onClick={handleOnclick}
    //             >
    //               Solicitar Reserva
    //             </button>
    //           </div>
    //           {charge ? (
    //             <Spinner />
    //           ) : (
    //             <div className="cho-container w-1/2 basis-2/5 flex justify-center"></div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    // </>
  );
};
