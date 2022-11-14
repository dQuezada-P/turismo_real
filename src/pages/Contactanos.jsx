import React from "react";
import { ModalAlert } from "../components/modal/ModalAlert";

export const Contactanos = () => {
  return (
    <>
    <ModalAlert/>
      <div className="w-full min-h-[calc(100vh-176px)] overflow-hidden">
        <img
          className="absolute w-full -top-[32rem]"
          src="https://turismoreal2.s3.amazonaws.com/Fondo.jpg"
          alt=""
        />
        <div className="relative container-body w-[900px]">
          <div className="bg-white w-full px-20 py-10 rounded-[30px] shadow-[0px_15px_15px_rgba(0,0,0,0.5)]  ">
            <div className="mx-auto w-[100%]">
              <p className="text-[30px] font-semibold mb-6">Contáctanos</p>
              <form className="flex justify-center flex-col">
                <div className="flex flex-col mb-6">
                  <label htmlFor="">Nombre Completo</label>
                  <input className="border-b border-black h-8" type="text" />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="">Correo Electronico</label>
                  <input className="border-b border-black h-8" type="text" />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="">Asunto</label>
                  <input className="border-b border-black h-8" type="text" />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="mb-3" htmlFor="">
                    Mensaje
                  </label>
                  <textarea className="border border-black h-16" />
                </div>
                <button className="rounded-full bg-purple-600 px-10 py-2 w-fit text-white mb-8">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
