import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const SummaryData = ({ department, user }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full h-full flex flex-col sm:flex-row font-semibold dark:bg-gray-600 ">
      <div className="InfoUser w-full basis-[50%] border-b-2 border-purple-600 dark:border-gray-700 sm:border-b-0 sm:border-r-2 items-center justify-center ">
        <div className="border-2 border-purple-600 dark:border-gray-700 rounded-xl w-[50%] mx-auto my-4">
          <p className="text-center text-base 2xl:text-2xl my-2 sm:my-4 underline decoration-purple-600 dark:decoration-gray-700 ">
            Datos de Contacto
          </p>
          <div className="w-full h-min flex flex-col">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row place-items-center gap-2 ">
                  {" "}
                  <label
                    htmlFor="rut"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Rut:{" "}
                  </label>
                  <input
                    id="rut"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white basis-[75%] lining-nums text-center text-xs 2xl:text-base"
                    disabled
                    value={user.RUT}
                  />
                </div>
                <div className="flex flex-row place-items-center gap-2">
                  {" "}
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Dias:{" "}
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border-2 border-gray-200 rounded w-full py-0 2xl:py-2 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base text-black lining-nums"
                    {...register("day")}
                  />
                </div>
                <p className="text-red-700 text-xs text-end w-full lining-nums">
                  {errors.day?.message}
                </p>
                <div className="flex flex-row place-items-center gap-2">
                  {" "}
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Correo:{" "}
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="correo"
                    className="border-2 border-gray-200 rounded w-full py-0 2xl:py-2 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base text-black lining-nums"
                    placeholder="correo@correo.cl"
                    defaultValue={user.CORREO}
                    {...register("correo")}
                  />
                </div>
                <p className="text-red-700 text-xs text-end w-full lining-nums">
                  {errors.correo?.message}
                </p>
                <div className="flex flex-row place-items-center gap-2">
                  {" "}
                  <label
                    htmlFor="tel"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Telefóno:{" "}
                  </label>
                  <input
                    id="tel"
                    type="text"
                    className=" border-2 border-gray-200 rounded  py-0 2xl:py-2 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base text-black lining-nums"
                    placeholder="+56912345678"
                    defaultValue={user.TELEFONO}
                    {...register("tel")}
                  />
                </div>
                <p className="text-red-700 text-xs text-end w-full lining-nums">
                  {errors.tel?.message}
                </p>
                <div className="flex flex-row place-items-center gap-2">
                  {" "}
                  <label
                    htmlFor="inv"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Invitados:{" "}
                  </label>
                  <input
                    id="inv"
                    type="text"
                    className="border-2 border-gray-200 rounded  py-0 2xl:py-2 leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-sm 2xl:text-base text-black lining-nums"
                    {...register("inv")}
                  />
                </div>
                <p className="text-red-700 text-xs text-end w-full lining-nums">
                  {errors.inv?.message}
                </p>
                <div className="flex flex-row place-items-center gap-2 mb-4 sm:mb-0">
                  {" "}
                  <label
                    htmlFor="fecha"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Fecha:{" "}
                  </label>
                  <Controller
                    id="fecha"
                    control={control}
                    name="fecha"
                    render={({ field: { onChange, value } }) => (
                      <DatePicker
                        className=" lining-nums border-2 text-black w-full border-gray-200 rounded py-0 sm:py-1 2xl:py-2 focus:outline-none focus:bg-white basis-auto text-xs 2xl:text-lg text-center "
                        onChange={onChange}
                        selected={value}
                        minDate={new Date()}
                        dateFormat={"dd/MM/yyyy"}
                      />
                    )}
                  />
                </div>
                <p className="text-red-700 text-xs text-end w-full">
                  {errors.fecha?.message}
                </p>
                <input id="btnSubmit" hidden type="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="InfoDept basis-[50%] w-full  flex flex-col sm:flex-row font-semibold justify-center">
        <div className="border-2 border-purple-600 dark:border-gray-700 rounded-xl w-[50%] mx-auto my-4">
          <div className="w-full h-min flex flex-col items-center justify-center">
            <p className="text-center text-base 2xl:text-2xl my-2 sm:my-4 underline decoration-purple-600 dark:decoration-gray-700 ">
              Datos del Departamento
            </p>
            <div className="flex flex-col items-center gap-4 ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row place-items-center gap-2 ">
                  {" "}
                  <label
                    htmlFor="nameD"
                    className="text-xs sm:text-base 2xl:text-xl basis-[25%]"
                  >
                    Nombre:{" "}
                  </label>
                  <input
                    id="nameD"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-xs 2xl:text-base"
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
                    className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded leading-tight focus:outline-none focus:bg-white w-10 lining-nums text-center text-xs 2xl:text-base"
                    value={department.NUMERO_HABITACION}
                    disabled
                  />
                  <label className="text-xs sm:text-base 2xl:text-xl basis-[25%] ml-8">
                    Baños:{" "}
                  </label>
                  <input
                    type="text"
                    className="bg-gray-200 appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white w-10 lining-nums text-xs text-center 2xl:text-base "
                    value={department.NUMERO_BANNO}
                    disabled
                  />
                </div>
                <div className="flex flex-row place-items-center"> </div>
                <div className="flex flex-row h-48 justify-center ">
                  <img
                    src={department.IMAGENES[0].url}
                    alt="Imagen"
                    className="w-60 h-44 2xl:w-72 2xl:h-52  rounded-md border-2 border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
