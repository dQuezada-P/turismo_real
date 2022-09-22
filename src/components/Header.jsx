import React from "react";
import {FaRegBuilding} from 'react-icons/all'
import { Link, NavLink , useLocation } from "react-router-dom";

export const Header = () => {
   const location =  useLocation()
   const urlLocation = location.pathname
  return (
    <div className="shadow-lg md:w-full ">
      <header className="container mx-auto p-6 ">
        <div className="md:flex md:justify-evenly">
          <div className="flex-initial text-center lg:ml-40 grid grid-cols-2 text-purple-400 font-semibold text-lg ">
            <Link to="/departamento"><FaRegBuilding className="row-start-2 text-sm shadow-sm text-purple-400" />
              Turismo<span className="row-start-2 text-yellow-400"> Real</span>
            </Link>
          </div>
          <nav className="flex-1 md:flex justify-center gap-5 md:gap-10">
            <div className={`${urlLocation === '/departamentos' ?'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2 transition ease-in-out delay-30 translate-y-1 scale-110 bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center': 'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2  hover:border-b-2 transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center'} `}>
              <NavLink className="text-center"
                to="/departamentos"
              >
                Departamentos
              </NavLink>
            </div>
            <div className={`${urlLocation === '/tours' ?'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2 transition ease-in-out delay-30 translate-y-1 scale-110 bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center': 'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2  hover:border-b-2 transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center '} `}>
              <NavLink
                to="/tours"
              >
                Tours
              </NavLink>
            </div>
            <div className={`${urlLocation === '/contactanos' ?'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2 transition ease-in-out delay-30 translate-y-1 scale-110 bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center': 'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2  hover:border-b-2 transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center'} `}>
              <NavLink
                to="/contactanos"
              >
                Contáctanos
              </NavLink>
            </div>
            <div className={`${urlLocation === '/nosotros' ?'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2 transition ease-in-out delay-30 translate-y-1 scale-110 bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center': 'px-3 py-1 shadow-md rounded-2xl hover:cursor-pointer border-b-2  hover:border-b-2 transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-200 text-lg font-bold text-purple-500 box-border md:w-40 text-center'} `}>
              <NavLink
                to="/nosotros"
              >
                Nosotros
              </NavLink>
            </div>
          </nav>
          <div className="flex-initial md:mr-40">
            <div className="btn_cliente">Soy Cliente</div>
          </div>
        </div>
      </header>
    </div>
  );
};
