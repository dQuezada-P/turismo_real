import React from "react";

export const Nosotros = () => {
  return (
    <>
      <div className="relative z-30 min-h-screen sm:min-h-[55rem] flex flex-col-reverse sm:flex-row container gap-4 sm:gap-0 mx-auto -top-80 sm:-top-0">
        <div className="basis-[50%] w-[90%] sm:w-full mx-auto sm:mx-0 flex items-center justify-center">
          <img
            src="../public/2.gif"
            className="object-cover object-center rounded-2xl h-[50%]"
          ></img>
        </div>
        <div className="basis-[50%] flex items-center justify-center font-semibold">
          <h1 className="bg-gray-100 p-4 shadow-2xl rounded-2xl leading-loose ">
            La empresa “Turismo Real”, es una empresa familiar que se dedica al
            arriendo de departamentos propiedad de la empresa, y otros servicios
            en zonas turísticas del país. Tiene 10 años en el mercado y de a
            poco se ha hecho conocida por la calidad de sus departamentos,
            ubicación y trato gentil hacia los clientes. Actualmente la empresa
            cuenta con 10 departamentos ubicados en zonas de alto interés
            turístico para los clientes (Viña del Mar, La Serena, Pucón, Puerto
            Varas, etc.), todos ellos acondicionados con un alto estándar de
            calidad.
          </h1>
        </div>
      </div>
    </>
  );
};
