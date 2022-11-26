import React, { useState, useEffect } from 'react'
import { Label, TextInput, Checkbox } from "flowbite-react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useAuth } from '../context/hooks/useAuth';
import { useLoading } from '../context/hooks/useLoading';
import { useModal } from '../context/hooks/useModal';

import { AuthUser } from '../services/auth/auth.js';

yup.setLocale({
  mixed: {
    required: 'Campo es requerido',
  }
});

const schema = yup
  .object()
  .shape({
    username: yup.string().email('Formato de email: hola@turismoreal.cl').required(),
    password : yup.string().min(4,'Mínimo 4 caracteres').max(8,'Máximo 8 caracteres').required(),
  })
  .required();

export const Login = (next) => {
  const { setUser, user, isLogged, setToken, setTokenVerified } = useAuth();
  const { setShowModal, setParams, modalTypes, setModalType } = useModal();
  const { setIsLoading } = useLoading();


  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next_url = searchParams.get("next_url");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema) });

  useEffect(() => { 
    if (isLogged()) {
      console.log("Está logueado")
      navigate('/departamentos');
    }
    else console.info('No se ha logueado');
  }, [user]);

  const handleLogin = async (data) => {
    setIsLoading(true);

    Promise.all([
      AuthUser(data)
    ]).then(([response]) => {
      console.log(response.user);
      localStorage.setItem('token',response.token);
      setToken(response.token);
      setUser(response.user);
      navigate(next_url ? next_url : '/departamentos');
        
    }).catch(({response: {data}}) => {
      console.log(data)
      setModalType(modalTypes.info);
      setParams({
        success:false,
        title:'Error!',
        message: data.message,
        redirect_to: false,
      });
      setShowModal(true);
    }).finally(() => {
      setTokenVerified(true);
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-700 dark:text-white flex items-center justify-center py-10 rounded-xl drop-shadow-xl">
          <div className="w-full px-10 space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                <img
                  className="mx-auto h-60 w-auto dark:hidden"
                  src="/public/2.gif"
                  alt="Your Company"
                />
                <img
                  className="mx-auto h-60 w-auto hidden dark:block"
                  src="/public/1.gif"
                  alt="Your Company"
                />
                <span className="text-purple-500 dark:text-yellow-300">
                  Bienvenido !!
                </span><br />
                Inicia sesión con nosotros
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleLogin)}>
              <div className="flex flex-col justify-center gap-4">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="username" value="Correo" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="username"
                    type="text"
                    name="username"
                    placeholder="hola@turismoreal.cl"
                    {...register("username")}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.username?.message}
                  </p>
                </div>

                <div className="w-full mb-2 ">
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Contraseña" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.password?.message}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="remember" {...register("remember")} className="text-purple-600 dark:text-yellow-300"/>
                  <Label htmlFor="remember">
                    Recuérdame
                  </Label>
                </div>


                <button
                  type="submit"
                  className="md:w-1/2 w-full block mx-auto rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 dark:bg-yellow-300 dark:hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-300 focus:ring-offset-2"
                >
                  Iniciar Sesión
                </button>

              </div>

              
            </form>
          </div>
        </div>
      </div>
    </>
  );

}


export default Login