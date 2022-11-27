import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { TextInput, Label } from "flowbite-react";

export const SummaryData = ({ department, user }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full h-full flex flex-col md:flex-row font-semibold dark:bg-gray-600 rounded-lg">
      <div className="InfoUser w-full pb-4 md:pr-4 border-b-2 border-purple-600 dark:border-gray-700 sm:border-b-0 md:border-r-2 items-center justify-center ">
        
        <p className="text-center text-base 2xl:text-2xl my-4 underline decoration-purple-600 dark:decoration-gray-700 ">
          Datos de Contacto
        </p>
        <div className="w-full flex flex-col gap-4">
          <div className="xl:flex md:gap-4 ">
            <div className="w-full md:ml-2 ml-0.1 mb-2 ">
              <div className="mb-2 block ">
                <Label htmlFor="rut" value="Rut" />
                <span className="text-red-500 text-2xl h-full align-middle ">
                  *
                </span>
              </div>
              <TextInput
                id="rut"
                type="text"
                name="rut" 
                color="info"               
                value={user.RUT}
                disabled
              />
            </div>
            <div className="w-full md:ml-2 ml-0.1 mb-2 ">
              <div className="mb-2 block">
                <Label htmlFor="correo" value="Correo" />
                <span className="text-red-500 text-2xl h-full align-middle">
                  *
                </span>
              </div>
              <TextInput
                id="correo"
                type="text"
                name="correo"
                value={user.CORREO}
                {...register("correo")}
              />
              <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                {errors.correo?.message}
              </p>
            </div>
          </div>
          <div className="xl:flex md:gap-4 ">
            <div className="w-full md:ml-2 ml-0.1 mb-2">
              <div className="mb-2 block">
                <Label htmlFor="tel" value="Teléfono" />
                <span className="text-red-500 text-2xl h-full align-middle">
                  *
                </span>
              </div>
              <TextInput
                id="tel"
                type="text"
                name="tel"
                value={user.TELEFONO}
                {...register("tel")}
              />
              <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                {errors.tel?.message}
              </p>
            </div>

            <div className="w-full md:ml-2 ml-0.1 mb-2">
              <div className="mb-2 block">
                <Label htmlFor="day" value="Días" />
                <span className="text-red-500 text-2xl h-full align-middle">
                  *
                </span>
              </div>
              <TextInput
                id="day"
                type="text"
                name="day"
                {...register("day")}
              />
              <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                {errors.day?.message}
              </p>
            </div>
          </div>
          <div className="xl:flex md:gap-4 ">
            <div className="w-full md:ml-2 ml-0.1 mb-2">
              <div className="mb-2 block">
                <Label htmlFor="inv" value="Invitados" />
                <span className="text-red-500 text-2xl h-full align-middle">
                  *
                </span>
              </div>
              <TextInput
                id="inv"
                type="text"
                name="inv"
                {...register("inv")}
              />
              <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                {errors.inv?.message}
              </p>
            </div>
        
            <div className="w-full md:ml-2 ml-0.1 mb-2">
              {" "}
              <div className="mb-2 block">
                <Label htmlFor="fecha" value="Fecha" />
                <span className="text-red-500 text-2xl h-full align-middle">
                  *
                </span>
              </div>
              <Controller
                id="fecha"
                control={control}
                name="fecha"
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                    onChange={onChange}
                    selected={value}
                    minDate={new Date()}
                    dateFormat={"dd/MM/yyyy"}
                  />
                )}
              />
              <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
              {errors.fecha?.message}
            </p>
            </div>
          </div>
          
          
          <input id="btnSubmit" hidden type="submit" />
        </div>
      </div>
      <div className="InfoDept  w-full  flex flex-col sm:flex-row md:basis-[100%] xl:md:basis-[75%] font-semibold justify-center">
        <div className="w-full h-min flex flex-col px-4">
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
                    className="dark:bg-gray-500 bg-white appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded w-full leading-tight focus:outline-none focus:bg-white basis-[75%] text-center text-xs 2xl:text-base lining-nums"
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
                    className="dark:bg-gray-500 bg-white appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded leading-tight focus:outline-none focus:bg-white w-10 lining-nums text-center text-xs 2xl:text-base"
                    value={department.NUMERO_HABITACION}
                    disabled
                  />
                  <label className="text-xs sm:text-base 2xl:text-xl basis-[25%] ml-8">
                    Baños:{" "}
                  </label>
                  <input
                    type="text"
                    className="dark:bg-gray-500 bg-white appearance-none border-2 py-0 2xl:py-2 border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white w-10 lining-nums text-xs text-center 2xl:text-base "
                    value={department.NUMERO_BANNO}
                    disabled
                  />
                </div>
                <div className="flex flex-row place-items-center"> </div>
                <div className="flex flex-row h-48 justify-center ">
                  <img
                    src={department.IMAGENES ? department.IMAGENES[0].url : '' }
                    alt="Imagen"
                    className="w-50 h-34 2xl:w-70 2xl:h-50  rounded-md border-2 border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
