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
import $ from "jquery";
import { Progress } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/hooks/useAuth";
import { GetDepartamento } from "../../services/department/ApiRequestDepartment";
import { Circle } from "../reservation/components/Circle";
import { Service } from "./components/Services";
import { SummaryData } from "./components/SummaryData";
import { useReservation } from "../../context/hooks/useReservation";
import { Pay } from "./components/Pay";
import { getTours } from "../../services/tours/ApiRequestTour";
import { getTransports } from "../../services/transports/ApiRequestTransport";

export const Reserva = () => {
  const { reservation, setReservation, setFlagMercado } = useReservation();
  const { user } = useAuth();
  const [page, setPage] = useState(0);
  const [charge, setCharge] = useState(false);
  const [tourList, setTourList] = useState([]);
  const [flagTr, setFlagTr] = useState(false);
  const [transportList, setTransportList] = useState([]);
  const [flagTra, setFlagTra] = useState(false);

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
        .string()
        .matches(
          /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/,
          "Debe tener formato celular"
        )
        .required("Campo requerido"),
      inv: yup
        .number()
        .moreThan(0, "Número positivos")
        .integer("Debe ser número entero")
        .min(0)
        .max(20, "Maximo 20 Personas")
        .transform((value) => (isNaN(value) ? undefined : value))
        .required('Campo requerido, si no lleva invitados coloque "0"'),
      day: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .required("Campo requerido")
        .integer("Números Enteros")
        .min(1, "Minimo 1 Dia")
        .max(60, "Maximo 60 Dias"),
      // fecha: yup.string().matches(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,'Formato dd/MM/yyyy').required('Campo requerido')
      fecha: yup
        .date("Formato Fecha")
        .required("Formato Fecha dd/mm/yyyy")
        .transform((value) => (isNaN(value) ? undefined : value)),
    })
    .required();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    if (page != 2) {
      if (btnActive >= circle) {
        setBtnActive(circle);
      }
      if (page == 1) {
        if (flagTr && flagTra) {
          const textBtnNext = $("#textBtnNext");
          textBtnNext.text("SolicitarPago");
          setPage((currPage) => currPage + 1);
          setBtnActive(btnActive + 1);
          setReservation({
            ...reservation,
            transporte: e.transport == undefined ? 0 : e.transport,
            tour: e.tour == undefined || e.tour == false ? 0 : e.tour,
          });
        }
      } else {
        setReservation({
          ...reservation,
          dias: e.day,
          tel: e.tel,
          fecha: e.fecha,
          cantPersonas: e.inv,
          correo: e.correo,
        });
        setPage((currPage) => currPage + 1);
        setBtnActive(btnActive + 1);
      }
    } else {
      setFlag(true);
      setFlagMercado(true);
    }
  };

  const formContent = (children) => {
    return (
      <FormProvider {...methods}>
        <form
          id="formContext"
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
        <Service
          setFlagTr={setFlagTr}
          setFlagTra={setFlagTra}
          tourList={tourList}
          transportList={transportList}
          setTourList={setTourList}
        />
      ) : (
        <Pay department={department} />
      )
    );
  };

  const [circle] = useState(2);
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
  const [department, setDepartment] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const get = async () => {
      const dept = await GetDepartamento(id);
      const tours = await getTours();
      const listTour = tours.filter((tr) => {
        if (tr.ID_LOCALIDAD == dept.ID_LOCALIDAD) return tr;
      });
      const transports = await getTransports();
      const listTransport = transports.filter((tran) => {
        if (tran.ID_LOCALIDAD == dept.ID_LOCALIDAD && tran.ESTADO != 0)
          return tran;
      });
      setTourList(listTour);
      setTransportList(listTransport);
      if (!dept.msg) {
        setDepartment(dept);
        setReservation({
          ...reservation,
          rut: user.RUT,
          idUser: user.ID_ROL,
          idDep: dept.ID,
          nombre: dept.NOMBRE,
          img: dept.IMAGENES[0].url,
          valor: dept.VALOR_ARRIENDO,
        });
      }
      setCharge(true);
    };
    get();
  }, []);

  const handlePagesPrev = () => {
    if (page == 2) {
      const textBtnNext = $("#textBtnNext");
      textBtnNext.text("Siguiente");
      setFlagTra(false);
      setFlagTr(false);
    }
    setPage((currPage) => currPage - 1);
    if (btnActive <= 0) {
      setBtnActive(0);
    }
    setFlag(false);
    setFlagMercado(false);
    setBtnActive(btnActive - 1);
  };
  const handlePagesNext = () => {
    const btnSubmit = $("#btnSubmit");
    btnSubmit.trigger("click");
  };

  if (!charge)
    return (
      <div className="flex items-center justify-center min-h-screen relative z-30 font-bold underline ">
        <div className="uppercase text-3xl">
          Departamento No se encuentra registrado
        </div>
      </div>
    );
  return (
    <>
      <div className="BoxContent relative z-30 min-h-screen flex justify-center items-center font-semibold font-serif">
        <div className="BoxMain w-[80%] sm:[80%] h-full sm:h-[80%] container mx-auto sm:flex sm:flex-row shadow-xl rounded-2xl sm:mt-8 sm:mb-6 2xl:mt-12">
          <div className="InfoShopping bg-white basis-[100%] h-min-[45rem] sm:h-min-[40rem] 2xl:h-min-[50rem] rounded-2xl flex flex-col font-semibold dark:bg-gray-600">
            <div className="basis-[10%] flex flex-col border-b-4 border-purple-600 dark:border-gray-700">
              <h2 className="flex w-full basis-[50%] justify-center items-center text-sm sm:text-base 2xl:text-2xl underline py-2">
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
            <div className="basis-auto flex flex-row justify-center items-center gap-10 2xl:gap-20 font-semibold border-t-4 border-purple-600 dark:border-gray-700">
              <button
                type="button"
                className={
                  page == 0
                    ? "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 dark:ring-gray-600 bg-gray-700 text-white rounded-lg ease-out dark:from-black dark:to-gray-600 ring-purple-500 text-sm sm:text-base 2xl:text-lg "
                    : "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 hover:ring-2 dark:ring-gray-700 bg-gray-700 text-white rounded-lg transform transition duration-100 hover:scale-105 ease-out bg-gradient-to-t from-black to-purple-600 dark:from-black dark:to-gray-700 ring-purple-500 text-sm sm:text-base 2xl:text-lg"
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
                type="button"
                className={
                  !flag
                    ? "text-center w-28 2xl:w-44 sm:w-36 flex flex-row items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 hover:ring-2 dark:ring-gray-600 bg-gray-700 text-white rounded-lg transform transition duration-100 hover:scale-105 ease-out bg-gradient-to-t from-black to-purple-600 dark:from-black dark:to-gray-700 ring-purple-500 text-sm sm:text-base 2xl:text-lg m-4"
                    : "text-center w-28 2xl:w-44 sm:w-36 items-center justify-center gap-2 h-[50%] px-4 py-2 2xl:px-12 dark:ring-gray-600 bg-gray-700 text-white rounded-lg ease-out dark:from-black dark:to-gray-700 ring-purple-500 text-sm sm:text-base 2xl:text-lg m-4 disabled flex"
                }
                disabled={page == TitlePages.length - 1 ? flag : ""}
                onClick={handlePagesNext}
              >
                <span id="textBtnNext">Siguiente</span>
                <span>
                  {page == TitlePages.length - 1 ? (
                    ""
                  ) : (
                    <HiArrowSmRight className="sm:text-3xl" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
