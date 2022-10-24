import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '../context/hooks/useAuth';
import { AuthUser } from '../services/auth/auth.js';

import { BsFileLock } from "react-icons/bs";

export const Login = (next) => {
  const { user, setUser, isLogged, token, setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { 
    if (isLogged()) {
      console.log("Está logueado")
      navigate('/departamentos');
    }
    else console.info('No se ha logueado');
  }, [token, user])

  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: username.value,
      password: password.value
    }

    await AuthUser(data)
    .then(res => {
      setToken(res.token)
      if (res.auth)
        console.log(res.user)
        setUser(res.user)
        localStorage.setItem('token',res.token)
        setToken(res.token)
    })

    
  }

  return (<>
  <div className="flex min-h-[calc(100vh-176px)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-lg bg-white flex items-center justify-center py-10 rounded-xl drop-shadow-xl">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-60 w-auto"
            src="/public/2.gif"
            alt="Your Company"
          />
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Inicia Sesión con tu cuenta
          </h2>
          
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Correo Electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Correo electrónico"
                {...username} //Value and onChange
              />
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
                {...password} //Value and onChange
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
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

// Set: useState
// Return: Value and onChange input event, setting new value
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({target}) => {
    setValue(target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}




export default Login