import React from "react";
import { InformacionPersonal } from "./components/InformacionPersonal";
import { MisReservas } from "./components/MisReservas";
import { useLoading } from "../../context/hooks/useLoading";
import { useEffect } from "react";

export const PerfilUsuario = () => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div className="container px-3 my-10 mx-auto relative">
          <InformacionPersonal />
          <MisReservas />
        </div>
      )}
    </>
  );
};
