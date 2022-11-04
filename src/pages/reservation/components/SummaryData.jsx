import DatePicker from "react-datepicker";
import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const SummaryData = ({ department , user }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { register  } = useFormContext()

  return (
    <div className="w-full h-full flex flex-col sm:flex-row font-semibold">
      <div className="InfoUser w-full basis-[50%] border-b-2 border-purple-600 sm:border-b-0  sm:border-r-2 items-center justify-center ">
        <p className="text-center text-xs sm:text-base 2xl:text-2xl my-2 sm:my-4 underline decoration-purple-600 ">
          Datos de Contacto
        </p>
        <div className="w-full h-min flex flex-col">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row place-items-center gap-2 ">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Rut:{" "}
                </label>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white basis-[75%] lining-nums text-center text-sm 2xl:text-base"
                  disabled
                  value={user.RUT}
                />
              </div>

              <div className="flex flex-row place-items-center gap-2">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Nombre:{" "}
                </label>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base"
                  disabled
                  value={`${user.NOMBRE} ${user.APELLIDO}`}
                />
              </div>
              <div className="flex flex-row place-items-center gap-2">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                 
                >
                  Correo:{" "}
                </label>
                <input
                  type="text"
                  name="correo"
                  className="border-2 border-gray-200 rounded w-full py-0 2xl:py-2 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base"
                  {...register('correo')}
                />
              </div>
              <div className="flex flex-row place-items-center gap-2">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Telefóno:{" "}
                </label>
                <input
                  type="text"
                  className=" border-2 border-gray-200 rounded w-full py-0 2xl:py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base"
                  {...register('tel')}
                />
              </div>
              <div className="flex flex-row place-items-center gap-2">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Invitados:{" "}
                </label>
                <input
                  type="text"
                  className=" border-2 border-gray-200 rounded w-full py-0 2xl:py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base"
                  {...register('invitado')}
                />
              </div>
              <div className="flex flex-row place-items-center gap-2 mb-4 sm:mb-0">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Fecha:{" "}
                </label>
                <DatePicker
                  className=" lining-nums border-2 text-black border-gray-200 rounded py-0 sm:py-1 2xl:py-2 focus:outline-none focus:bg-white basis-auto text-sm "
                  placeholderText="Seleccione Fecha"
                  selected={startDate}
                  onSelect={(e)=>{setStartDate(e)}}
                  {...register('fecha')}
                ></DatePicker>
              </div>
              <input type="submit" />
            </div>
          </div>
        </div>
      </div>

      <div className="InfoDept basis-[50%] w-full  flex flex-col sm:flex-row font-semibold justify-center">
        <div className="w-full h-min flex flex-col items-center justify-center">
          <p className="text-center text-xs sm:text-base 2xl:text-2xl my-2 sm:my-4 underline decoration-purple-600 ">
            Datos del Departamento
          </p>
          <div className="flex flex-col items-center gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row place-items-center gap-2 ">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Nombre:{" "}
                </label>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base"
                  disabled
                  value={department.NOMBRE}
                />
              </div>

              <div className="flex flex-row place-items-center gap-2">
                {" "}
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                >
                  Habitaciones:{" "}
                </label>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded leading-tight focus:outline-none focus:bg-white w-10 lining-nums text-center text-sm 2xl:text-base"
                  value={department.NUMERO_HABITACION}
                  disabled
                />
                <label
                  htmlFor=""
                  className="text-xs sm:text-base 2xl:text-xl basis-[25%] ml-8"
                >
                  Baños:{" "}
                </label>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white w-10 lining-nums"
                  value={department.NUMERO_BANNO}
                  disabled
                />
              </div>
              <div className="flex flex-row place-items-center gap-2"> </div>
              <div className="flex flex-row place-items-center gap-2 justify-center mb-2 sm:mb-0">
                <img
                  src={department.IMAGENES[0].url}
                  alt="Imagen"
                  className="w-60 h-32 2xl:w-72 2xl:h-52  rounded-md border-2 border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
