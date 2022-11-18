import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDepartment } from "../context/hooks/useDepartment";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";
import { Carousel } from "flowbite-react";
import { VscHeart } from "react-icons/vsc";
import { RiShareForwardLine } from "react-icons/ri";
import { HiOutlineBuildingOffice, HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineChair } from "react-icons/md";

export const Departamento = () => {
  const { department, setDepartment } = useDepartment();
  const [flag, setFlag] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getDept = async () => {
        const dept = await GetDepartamento(id);
        setDepartment(dept);
        setFlag(false);
      };
      getDept();
    } catch (error) {}
  }, []);

  if (flag) return <div>cargandoo...</div>;

  return (
    <div className="container mx-auto sm:flex sm:flex-col relative z-30 my-2 gap-4 top-[20rem] sm:top-0 min-h-screen sm:w-full sm:items-center 2xl:justify-center sm:mt-6">
      <div className="BoxContainer h-96 sm:h-70 2xl:h-[30rem] mx-4 sm:w-2/4 2xl:w-4/6 bg-gray-50 dark:bg-white sm:mx-0 rounded-t-lg sm:rounded-lg dark:text-white">
        <div className="BoxMain w-full h-full sm:flex sm:flex-row">
          <div className="InfoLeft w-full h-full basis-3/5 flex sm:items-center">
            <div className="w-full sm:h-4/5 flex flex-wrap font-semibold justify-center ">
              <div className="Favorites ml-8 mt-4 sm:mt-0 h-min text-2xl 2xl:text-3xl w-full ">
                {/* <button className="text-purple-600 hover:text-purple-500 dark:text-gray-700 hover:dark:text-slate-600 mr-2">
                  <VscHeart className="transform transition duration-200 sm:hover:scale-125" />
                </button>
                <button className="text-purple-600 hover:text-purple-500 dark:text-gray-700 hover:dark:text-slate-600">
                  {" "}
                  <RiShareForwardLine className="transform transition duration-200 sm:hover:scale-125" />
                </button> */}
              </div>
              <div className="Box w-[85%] h-[75%] rounded-2xl shadow-xl bg-gray-100 dark:bg-gray-700 flex flex-col gap-10 items-center justify-center ">
                <h3 className="Title sm:text-sm 2xl:text-xl font-sans w-full text-center uppercase">
                  {department.ESTADO_RESERVA == "N"
                    ? " Departamento Reservado"
                    : " DEPARTAMENTO Disponible"}
                </h3>
                <h2 className="Coin lining-nums text-2xl 2xl:text-3xl w-full text-center ">
                  {" "}
                  {Intl.NumberFormat("es-CL", {
                    currency: "CLP",
                    style: "currency",
                  }).format(department.VALOR_ARRIENDO)}{" "}
                  - CLP
                </h2>
                <div className="Box flex flex-row w-full justify-center ">
                  <div className="Box basis-2/5">
                    <p className="Room flex flex-row items-center justify-center gap-4 text-xl 2xl:text-2xl dark:no-underline  underline decoration-purple-600">
                      {department.NUMERO_HABITACION}
                      <span>
                        <MdOutlineBed className="text-2xl 2xl:text-3xl text-purple-600 dark:text-white" />
                      </span>
                    </p>
                    <h6 className="BathRoom w-full text-center text-xs 2xl:text-sm capitalize">
                      {department.NUMERO_HABITACION > 1
                        ? "Habitaciónes"
                        : "Habitación"}
                    </h6>
                  </div>
                  <div className="basis-2/5">
                    <p className="flex flex-row items-center justify-center  gap-4 text-xl 2xl:text-2xl  dark:no-underline underline decoration-purple-600">
                      {department.NUMERO_BANNO}
                      <span>
                        <MdOutlineBathtub className="text-2xl 2xl:text-3xl text-purple-600 dark:text-white" />
                      </span>
                    </p>
                    <h6 className="w-full text-center text-xs 2xl:text-sm capitalize">
                      {department.NUMERO_BANNO > 1 ? "Baños" : "Baño"}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="InfoRight w-full h-full basis-2/5 flex sm:items-center bg-gray-50 sm:rounded-tr-xl rounded-bl-xl rounded-br-xl dark:bg-white">
            <div className="w-[90%] sm:w-full mx-auto sm:mx-0 h-4/5 border-gray-200 border-t-[1px] sm:border-t-[0px] sm:border-l-[1px] 2xl:border-l-[2px]">
              <div className="Dates h-min text-sm 2xl:text-base text-right w-full mt-4 sm:mt-0 font-semibold ">
                <h4 className="dark:text-gray-700 mr-4 lining-nums">
                  Actualizado: {department.MODIFIED_DATE}
                </h4>
                <h4 className="dark:text-gray-700 mr-4 lining-nums">
                  Publicado: {department.ADDED_DATE}
                </h4>
              </div>
              <div className="BoxInfoDept w-[95%] h-[95%] m-auto flex flex-col font-semibold ">
                <h3 className="ID basis-1/5 text-base 2xl:text-2xl flex items-center justify-center gap-2 underline decoration-purple-600 dark:no-underline dark:text-gray-700">
                  Código Departamento:{" "}
                  <span className="text-lg 2xl:text-3xl lining-nums">
                    {department.ID}
                  </span>
                </h3>
                <h4 className="Address basis-1/5 text-base sm:text-sm 2xl:text-xl flex items-center justify-center sm:justify-start lining-nums capitalize gap-4 ml-4  dark:text-gray-700 ">
                  <span>
                    {" "}
                    <HiOutlineMapPin className=" text-2xl sm:text-xl 2xl:text-4xl text-purple-600 dark:text-gray-700  " />
                  </span>
                  {department.DIRECCION}, {department.UBICACION}
                </h4>
                <h3 className="Description basis-1/5 text-base sm:text-sm 2xl:text-xl flex items-center justify-center sm:justify-start lining-nums capitalize gap-4 ml-4 dark:text-gray-700">
                  <span>
                    <MdOutlineChair className="text-2xl sm:text-xl 2xl:text-4xl text-purple-600 dark:text-gray-700" />
                  </span>
                  {department.DESCRIPCION}
                </h3>
                <h3 className="Name basis-1/5 text-base sm:text-sm 2xl:text-xl flex items-center justify-center sm:justify-start lining-nums capitalize gap-4 ml-4 dark:text-gray-700">
                  <span>
                    <HiOutlineBuildingOffice className="text-2xl 2xl:text-4xl sm:text-xl text-purple-600 dark:text-gray-700" />
                  </span>
                  {department.NOMBRE}
                </h3>
                <Link
                  className={`${
                    department.ESTADO_RESERVA == "N"
                      ? "Button w-[80%] mx-auto mt-4 py-2 rounded-lg shadow-lg ransform transition duration-200 sm:hover:scale-105 bg-gradient-to-b from-purple-600 via-purple-800 to-gray-700 text-white hover:ring-2 hover:ring-gray-300  hover:bg-gradient-to-t hover:from-gray-700 hover:to-purple-600 dark:bg-gray-700 dark:from-gray-700 dark:ring-gray-500 hidden"
                      : "Button w-[80%] mx-auto mt-4 py-2 text-center rounded-lg shadow-lg ransform transition duration-200 sm:hover:scale-105 bg-gradient-to-b from-purple-600 via-purple-800 to-gray-700 text-white hover:ring-2 hover:ring-gray-300  hover:bg-gradient-to-t hover:from-gray-700 hover:to-purple-600 dark:bg-gray-700 dark:from-gray-700 dark:ring-gray-500 "
                  }`}
                  to={`/reserva/${department.ID}`}
                >
                  Reservar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BoxImg h-72 sm:h-64 2xl:h-96 mx-4 sm:w-2/4 2xl:w-4/6 sm:mx-0 top-[28rem] sm:top-0 relative sm:z-30 shadow-sm">
        <Carousel>
          {department.IMAGENES.map((img, i) => (
            <img
              key={i}
              src={`${img.url}`}
              alt="Imagen"
              className="object-cover object-center"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
