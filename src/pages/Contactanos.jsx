import React from "react";

export const Contactanos = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <img
          className="absolute w-full object-cover object-center h-screen sm:-top-[0rem]"
          src="https://turismoreal2.s3.amazonaws.com/Fondo.jpg"
          alt=""
        />
        <div className="relative w-[90%] mx-auto sm:w-[900px] top-20 font-semibold">
          <div className="bg-white w-full px-20 py-10 rounded-[30px] shadow-[0px_15px_15px_rgba(0,0,0,0.5)]  ">
            <div className="mx-auto w-[100%]">
              <p className="text-[30px] font-semibold mb-6">Contáctanos</p>
              <form className="flex justify-center flex-col"  >
                <div className="flex flex-col mb-6">
                  <label htmlFor="">Nombre Completo</label>
                  <input className="border-b border-black rounded-lg h-8" type="text" />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="">Correo Electronico</label>
                  <input className="border-b border-black rounded-lg h-8" type="text" />
                </div>
                <div className="flex flex-col mb-6">
                  <label htmlFor="">Asunto</label>
                  <input className="border-b border-black rounded-lg h-8" type="text" />
                </div>
                <div className="flex flex-col mb-6">
                  <label className="mb-3" htmlFor="">
                    Mensaje
                  </label>
                  <textarea className="border border-black rounded-lg h-16" />
                </div>
                <button className="rounded-full bg-purple-600 px-10 py-2 w-fit text-white mb-8" >
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
