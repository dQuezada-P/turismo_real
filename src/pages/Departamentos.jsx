import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useLoading } from "../context/hooks/useLoading";
import { getLocations } from "../services/locations/locations";
import { getDepartamentos } from "../services/department/ApiRequestDepartment";

import { MdOutlineBathtub, MdOutlineBed } from "react-icons/md";

import Banner from "../components/banners/Banner";
import Modal from "../components/modal/Modal";

export const Departamentos = () => {
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState(0);

  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    console.log("render");
    setIsLoading(true);

    Promise.all([getLocations(), getDepartamentos()])
      .then(([locationList, departmentList]) => {
        setLocations(locationList);
        setDepartments(departmentList);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  const handleFilterLocation = ({ target: { value } }) => {
    setFilter(value);
  };

  const filteredDepartments = () => {
    if (filter == 0) return departments;

    return departments.filter((department) => {
      return department.ID_LOCALIDAD == filter;
    });
  };

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          {" "}
          <div className="Page_Departamentos relative z-30">
            <Banner
              title={"Arriendo de departamentos"}
              name={"Turismo Real"}
              desc1={
                "Si deseas viajar y conocer lugares turísticos en el país,"
              }
              desc2={
                "es el lugar correcto. Como empresa ofrecemos los mejores servicios de arriendo de departamentos, servicio de transporte y también tours a las mejores zonas turísticas cercanas a los departamentos."
              }
              desc3={
                "Para la comodidad de nuestros clientes ofrecemos la facilidad de interactuar con nosotros de manera online, fácil y secilla, si presentas cualquier consulta no dudes en hablarnos, toda la información se encuentra en la sección"
              }
            />
            <div className="mx-auto container mb-4">
              <label
                htmlFor="filter"
                className="block my-2 ml-4 sm:ml-0 relative text-base 2xl:text-lg font-semibold text-purple-600 dark:text-white"
              >
                Búsqueda Avanzada
              </label>
              <select
                id="filter"
                className="block p-2 mb-6 ml-4 sm:ml-0 w-11/12 sm:w-1/4 2xl:w-1/6 text-base relative text-purple-600 bg-gray-50 rounded-lg border border-purple-300 focus:ring-purple-400 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white shadow-md"
                onChange={handleFilterLocation}
              >
                <option value={0}>Seleccionar Localidad</option>
                {locations.map((location) => (
                  <option className="" key={location.ID} value={location.ID}>
                    {location.NOMBRE}
                  </option>
                ))}
              </select>
              <p className="text-black dark:text-white text-xl md:text-lg bg-white dark:bg-gray-700 w-fit p-3 px-4 rounded-xl shadow-xl">Los valores de arriendos mostrados son por noche</p>
            </div>
            {/* Cards */}

            <div className=" min-h-[30rem] container ml-4 sm:mx-auto flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ">
              {filteredDepartments().map((depto) => (
                <div
                  className="w-11/12 h-60 2xl:h-72 shadow-xl rounded-b-2xl transform transition duration-200 sm:hover:scale-105"
                  key={depto.ID}
                >
                  <div className="h-full w-full rounded-t-2xl">
                    <NavLink to={`/departamento/${depto.ID}`}>
                      <img
                        src={depto.IMAGENES[0].url}
                        alt="Imagen"
                        className="object-cover w-full rounded-t-2xl h-3/5"
                      />
                    </NavLink>
                    <div className="rounded-b-2xl bg-white h-2/5 flex flex-col">
                      <h3 className="ml-4 font-semibold text-lg 2xl:text-xl py-1 lining-nums">
                        {Intl.NumberFormat("es-CL", {
                          currency: "CLP",
                          style: "currency",
                        }).format(depto.VALOR_ARRIENDO)}
                      </h3>

                      <div className="flex flex-row items-center ">
                        <h4 className="ml-4 font-semibold text-sm basis-2/5   ">
                          {depto.UBICACION}{" "}
                        </h4>
                        <h3 className="font-bold basis-3/5 text-start ml-4 2xl:ml-8 text-purple-600 underline decoration-purple-500">
                          {depto.ESTADO_RESERVA == "Y"
                            ? "Disponible"
                            : "Reservado"}
                        </h3>
                      </div>
                      <div className="flex flex-row lining-nums items-center font-semibold ">
                        <h4 className="basis-1/5 ml-4 py-2 flex items-center gap-1">
                          {depto.NUMERO_HABITACION}
                          <MdOutlineBed />
                        </h4>
                        <h4 className="basis-1/5 ml-2 2xl:ml-4 py-2 text-center flex items-center gap-1">
                          {depto.NUMERO_BANNO} <MdOutlineBathtub />
                        </h4>
                        <h4 className="basis-3/5 ml-2 2xl:ml-4 py-2 text-start text-sm 2xl:text-base ">
                          {depto.NOMBRE}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
