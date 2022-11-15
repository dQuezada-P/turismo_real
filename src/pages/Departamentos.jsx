import { useDepartment } from "../context/hooks/useDepartment";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/hooks/useAuth";
import Banner from "../components/banners/Banner";
import { MdOutlineBathtub, MdOutlineBed } from "react-icons/md";
import Modal from "../components/modal/Modal";
import { getLocations } from "../services/locations/locations";
export const Departamentos = () => {
  const { departments, setDepartments, bkupDepartment } = useDepartment();
  const { showModal, setShowModal } = useAuth();
  let { state } = useLocation();
  const nav = useNavigate();
  const [locations, setLocations] = useState([]);
  const [filterLocation, setFilterLocation] = useState(departments);
  let flag
  useEffect(() => {
    const getStates = async () => {
      const states = await getLocations();
      setLocations(states);
      flag = true
    };
    getStates();
    return () => {
      setDepartments(bkupDepartment);
    };
  }, []);

  useEffect(() => {
    if (state) {
      setShowModal(true);
      nav("", { state: false });
    }
  }, [state]);
  
  const handleFilterLocation = (e) => {
    if (e.target.value != 0) {
      if (flag) {
        const deptFilters = departments.filter((dept) => {
          return dept.ID_LOCALIDAD == e.target.value;
        });
        setDepartments(deptFilters);
        flag = false;
      } else {
        const deptFilters = filterLocation.filter((dept) => {
          return dept.ID_LOCALIDAD == e.target.value;
        });
        setDepartments(deptFilters);
        flag = true;
      }
    }else{
      setDepartments(bkupDepartment)
    }
  };
  if (departments.length == 0)
    return (
      <div className=" h-full relative z-30">
        <Banner
          title={"Arriendo de departamentos"}
          name={"Turismo Real"}
          desc1={"Si deseas viajar y conocer lugares turísticos en el país,"}
          desc2={
            "es el lugar correcto. Como empresa ofrecemos los mejores servicios de arriendo de departamentos, servicio de transporte y también tours a las mejores zonas turísticas cercanas a los departamentos."
          }
          desc3={
            "Para la comodidad de nuestros clientes ofrecemos la facilidad de interactuar con nosotros de manera online, fácil y secilla, si presentas cualquier consulta no dudes en hablarnos, toda la información se encuentra en la sección"
          }
        />
        <h2 className="text-4xl text-center text-purple-800 underline decoration-black min-h-screen mt-40">
          No HAY Departamentos Disponbles
        </h2>
      </div>
    );

  return (
    <>
      <Modal />
      <div className="Page_Departamentos relative z-30">
        <Banner
          title={"Arriendo de departamentos"}
          name={"Turismo Real"}
          desc1={"Si deseas viajar y conocer lugares turísticos en el país,"}
          desc2={
            "es el lugar correcto. Como empresa ofrecemos los mejores servicios de arriendo de departamentos, servicio de transporte y también tours a las mejores zonas turísticas cercanas a los departamentos."
          }
          desc3={
            "Para la comodidad de nuestros clientes ofrecemos la facilidad de interactuar con nosotros de manera online, fácil y secilla, si presentas cualquier consulta no dudes en hablarnos, toda la información se encuentra en la sección"
          }
        />
        <div className="mx-auto container">
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
        </div>
        {/* Cards */}
        <div className=" min-h-[30rem] container ml-4 sm:mx-auto flex flex-col sm:grid sm:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ">
          {departments.map((depto) => (
            <div
              className="w-11/12 h-60 2xl:h-72 shadow-lg rounded-b-2xl transform transition duration-200 sm:hover:scale-105"
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
                      {depto.ESTADO_RESERVA == "Y" ? "Disponible" : "Reservado"}
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
  );
  // return charging ? (
  //   <div className="md:h-[calc(100vh-176px)]">
  //     {" "}
  //     <Spinner />
  //   </div>
  // ) : (
  //   <>
  //     <Modal />
  //     <Body

  //     >
  //       <div
  //         className={`${
  //           departments.length < 5
  //            // ? " mx-6 md:mx-40 md:h-[calc(100vh-176px)]"
  //             : " mx-6 md:mx-40 "
  //         }`}
  //       >
  //         <Filter />
  //         {departments == [] ? (
  //           <div className="w-full h-full text-center md:flex md:items-start md:pt-20 md:justify-center relative z-30 ">
  //             <p className="text-4xl font-semibold text-purple-700">
  //               No Hay Departamentos Disponibles
  //             </p>
  //           </div>
  //         ) : (
  //           <div className="grid md:grid-cols-4 mb-12 gap-4 relative z-30 ">
  //             {departments.map((depto) => (
  //               <div
  //                 className="rounded-3xl bg-white shadow-[0px_15px_15px_rgba(0,0,0,0.5)]"
  //                 key={depto.ID}
  //               >
  //                 <DepartmentCard depto={depto} />
  //               </div>
  //             ))}
  //           </div>
  //         )}
  //       </div>
  //     </Body>
  //   </>
  // );
};
