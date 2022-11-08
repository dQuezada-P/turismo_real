import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiCash,
  HiOutlineStar,
  HiPencilAlt,
} from "react-icons/hi";
import * as yup from "yup";

import axios from "axios";
import { Progress } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/hooks/useAuth";
import { useDepartment } from "../../context/hooks/useDepartment";
import { GetDepartamento } from "../../services/department/ApiRequestDepartment";
import { Circle } from "../reservation/components/Circle";
import { Tour } from "../reservation/components/Tour";
import { Service } from "./components/Services";
import { SummaryData } from "./components/SummaryData";
import { useTransport } from "../../context/hooks/useTransport";
import { useTour } from "../../context/hooks/useTour";

export const Reserva = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(0);
  const { transports, setTransportList } = useTransport();
  const { tours, setTourList } = useTour();

  const TitlePages = [
    "Información del Arriendo",
    "Servicios Adicionales",
    "Pagar",
  ];
  const schema = yup
    .object()
    .shape({
      correo: yup
        .string()
        .email("Debe tener un Formato de Email")
        .required("Correo es requerido"),
      tel: yup
        .number("Solo Números Enteros")
        .integer("Solo Números Enteros")
        .positive("Solo Números Enteros")
        .required("Telefóno es requerido")
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable(),
      inv: yup
        .number()
        .positive()
        .integer()
        .min(2)
        .transform((value) => (isNaN(value) ? undefined : value)),
    })
    .required();

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const formContent = (children) => {
    return (
      <FormProvider {...methods}>
        <form
          className="h-full w-full"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </FormProvider>
    );
  };

  const PageDisplay = () => {
    return formContent(
      page === 0 ? (
        <SummaryData department={department} user={user} />
      ) : page === 1 ? (
        <Service />
      ) : (
        <Tour />
      )
    );
  };

  const [circle, setCircle] = useState(2);
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
          {i === 0 ? <HiPencilAlt /> : i === 1 ? <HiOutlineStar /> : <HiCash />}
        </p>
      </Circle>
    );
  }

  useEffect(() => {
    setWidthBar((100 / circle) * btnActive);
  }, [circle, btnActive]);

  const { id } = useParams();
  const { department, setDepartment, imageCharge, setImageCharge } =
    useDepartment();
  const [flag, setFlag] = useState(true);

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
    const listTransport = transports.filter((tran) => {
      if (tran.ID_LOCALIDAD === department.ID_LOCALIDAD) return tran;
    });
    setTransportList(listTransport);

    const listTour = tours.filter((tr) => {
      if (tr.ID_LOCALIDAD === department.ID_LOCALIDAD) return tr;
    });
    setTourList(listTour);
    

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

  const handleOnclick = async () => {
    charge == null ? setCharge(true) : null;
    console.log(date);

    arriendo.abono = abono;

    const data = {
      cliente: cliente,
      arriendo: arriendo,
    };
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
        <div className="BoxMain w-[90%] sm:[80%] h-full sm:h-[80%] container mx-auto sm:flex sm:flex-row shadow-xl rounded-2xl sm:mt-8 sm:mb-6 2xl:mt-12 ">
          <div className="InfoShopping bg-white basis-[70%] h-[45rem] sm:h-[35rem] 2xl:h-[50rem] rounded-t-2xl sm:rounded-tr-none sm:rounded-tl-2xl sm:rounded-bl-2xl flex flex-col font-semibold">
            <div className="basis-[15%] flex flex-col border-b-2 border-purple-600 ">
              <h2 className="flex w-full basis-[50%] justify-center items-center text-sm sm:text-base 2xl:text-2xl underline">
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
              <h2 className="font-semibold dark:text-gray-800 uppercase sm:text-base 2xl:text-2xl">
                Resumen de la orden
              </h2>
            </div>
            <div className=" basis-[60%]">Products</div>
            <div className=" basis-[15%]">Total</div>
          </div>
        </div>
      </div>
    </>
  );
};
