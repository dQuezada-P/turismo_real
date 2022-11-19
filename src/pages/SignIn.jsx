import React from "react";
import { BsFileLock } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nombre: yup.string().required(),
}).required;

export const SignIn = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => console.log(data);

  return (<>
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white flex items-center justify-center py-10 rounded-xl drop-shadow-xl">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Inicia Sesión con tu cuenta
            </h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="nombre" className="sr-only">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="nombre"
                  autoComplete="nombre"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Correo electrónico"
                  { ...register("nombre") }
                />
                <p className="text-red-700 text-xs text-end w-full lining-nums">
                  {errors.nombre?.message}
                </p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>
  
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Recuérdame
                </label>
              </div>
  
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsFileLock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
  
                </span>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>);
}
