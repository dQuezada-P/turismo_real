import { useTour } from "../context/hooks/useTour";
import { Spinner } from "../components/spinner/Spinner";
import Body from "../components/banners/Banner";
import Banner from "../components/banners/Banner";
import { getLocations } from "../services/locations/locations";
import { useState, useEffect } from "react";
export const Tours = () => {
  const { tours, setTours } = useTour();
  const { charging, setCharging } = useTour();
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getStates = async () => {
      const states = await getLocations();
      setLocations(states);
      flag = true;
    };
    getStates();
  }, []);
  const handleFilterLocation = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="Page_Departamentos h-full relative z-30">
        <Banner
          title={"Servicios Tour en zonas turísticas"}
          desc1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid? Laboriosam maiores tenetur"
          }
          name={"Turismo Real"}
          desc2={
            "vitae quidem ipsum</span> unde commodi nemo alias ipsam nam, incidunt accusantium in adipisci eius, eligendi, perspiciatis corrupti at sequi molestiae praesentium. Ut totam harum placeat, velit veritatis accusantium, doloribus asperiores repudiandae magnam maxime impedit nemo assumenda a."
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
            <option value={""} selected>
              Seleccionar Localidad
            </option>
            {locations.map((location) => (
              <option className="" key={location.ID} value={location.ID}>
                {location.NOMBRE}
              </option>
            ))}
          </select>
        </div>

        <div className="min-h-screen container ml-4 sm:mx-auto flex flex-col sm:grid sm:grid-cols-3 2xl:grid-cols-4 mb-4 ">
          {tours.map((tour) => (
            <div className="card rounded-3xl bg-white shadow-lg transform transition duration-200 sm:hover:scale-110" key={tour.ID}>
              <div className="card-image">
                <img
                  className=""
                  src="https://ollaguatravel.com/wp-content/uploads/2015/12/Stgo1.jpg"
                  alt="Imagen"
                />
              </div>
              {console.log(tour)}
              <h3 className="ml-4 font-semibold text-lg 2xl:text-xl py-1 lining-nums">
                {Intl.NumberFormat("es-CL", {
                  currency: "CLP",
                  style: "currency",
                }).format(tour.PRECIO)}
              </h3>
              <div className="flex flex-row items-center ">
                <h4 className="ml-4 font-semibold text-sm basis-2/5 py-2  ">
                  {tour.LOCALIDAD}{" "}
                </h4>
                <h3 className="font-bold basis-3/5 text-start text-purple-600 lining-nums">
                  Cupo: {tour.CUPO}
                </h3>
              </div>
              <div className="flex basis-1/4 lining-nums items-center font-semibold ">
                <h3 className="ml-4 font-bold text-star lining-nums py-2">
                  Fecha: {tour.FECHA}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CUPO: 3
                          ​
                          DESCRIPCION: "PLAYA BONITA"
                          ​
                          DURACION: "5 HORAS"
                          ​
                          FECHA: "26/08/2022"
                          ​
                          HORA_INICIO: "14:00"
                          ​
                          ID: "TO_1"
                          ​
                          ID_LOCALIDAD: 1
                          ​
                          LOCALIDAD: "LA SERENA"
                          ​
                          PRECIO: 7500 */}

      {/* {charging ? (
        <div className="md:h-[calc(100vh-176px)]">
          {" "}
          <Spinner />
        </div>
      ) : (
        <Body
          title={"Servicios Tour en zonas turísticas"}
          desc1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid? Laboriosam maiores tenetur"
          }
          name={"Turismo Real"}
          desc2={
            "vitae quidem ipsum</span> unde commodi nemo alias ipsam nam, incidunt accusantium in adipisci eius, eligendi, perspiciatis corrupti at sequi molestiae praesentium. Ut totam harum placeat, velit veritatis accusantium, doloribus asperiores repudiandae magnam maxime impedit nemo assumenda a."
          }
        >
          {" "}
          <div
            className={`${
              tours.length < 5
                ? " mx-6 md:mx-40  min-h-[calc(100vh-176px-13rem)]"
                : " mx-6 md:mx-40 "
            }`}
          >
            {tours == [] ? (
              <div className="w-full h-full text-center md:flex md:items-start md:pt-20 md:justify-center relative z-30">
                <p className="text-4xl font-semibold text-purple-700">
                  No Hay Tours Disponibles
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-4 mb-12 gap-4 relative z-30 ">
                {tours.map((tour) => (
                  <div
                    className="card rounded-3xl bg-white shadow-[0px_15px_15px_rgba(0,0,0,0.5)]"
                    key={tour.ID}
                  >
                    <div className="card-image">
                      <img
                        className=""
                        src="https://ollaguatravel.com/wp-content/uploads/2015/12/Stgo1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="card-info">
                      <p className="font-bold text-2xl">$95.000</p>
                      <p className="font-semibold text-xl">Tour Isla Damas</p>
                      <p className="text-xl text-gray-500">La Serena</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Body>
      )} */}
    </>
  );
};
