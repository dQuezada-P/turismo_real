import React from "react";

export const Contactanos = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <img
          className="fixed w-full object-cover object-center h-screen"
          src="https://turismoreal2.s3.amazonaws.com/Fondo.jpg"
          alt=""
        />
        <div className="relative w-[90%] mx-auto max-w-[900px] mt-8 2xl:top-8 font-semibold">
          <div className="bg-white w-full py-10 rounded-[30px] shadow-[0px_15px_15px_rgba(0,0,0,0.5)]  ">
            <div className="w-full container mx-auto">
              <p className="text-[30px] font-semibold mb-6 text-center underline ">
                Contáctanos
              </p>
              <form className="flex justify-center flex-col w-full">
                <div className="flex flex-col gap-4 w-[90%] mx-auto">
                  <label htmlFor="">Nombre Completo:</label>
                  <input
                    className="border-b border-black rounded-lg h-8 mb-4"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[90%] mx-auto">
                  <label htmlFor="">Correo Electronico:</label>
                  <input
                    className="border-b border-black rounded-lg h-8 mb-4"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[90%] mx-auto">
                  <label htmlFor="">Asunto:</label>
                  <input
                    className="border-b border-black rounded-lg h-8 mb-4"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[90%] mx-auto">
                  <label className="mb-3" htmlFor="">
                    Mensaje:
                  </label>
                  <textarea className="border border-black rounded-lg h-16 mb-4" />
                </div>
                <div className="flex flex-col gap-4 w-[90%] mx-auto">
                  <button className="rounded-2xl w-full sm:w-[25%] mx-auto sm:mx-0 bg-purple-600 px-10 py-2 text-white hover:bg-purple-500">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
