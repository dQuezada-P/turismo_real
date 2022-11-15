import { useTour } from "../context/hooks/useTour";
import Banner from "../components/banners/Banner";
import { getLocations } from "../services/locations/locations";
import { useState, useEffect } from "react";
export const Tours = () => {
  const { tours, setTours, bkupTours, setBkupTours } = useTour();
  const [filterLocation, setFilterLocation] = useState(tours);
  const [locations, setLocations] = useState([]);
  let flag;
  useEffect(() => {
    const getStates = async () => {
      const states = await getLocations();
      setLocations(states);
      flag = true;
    };
    getStates();
    return () => {
      setTours(bkupTours);
    };
  }, []);
  const handleFilterLocation = (e) => {
    if (e.target.value != 0) {
      if (flag) {
        const trFilters = tours.filter((tr) => {
          return tr.ID_LOCALIDAD == e.target.value;
        });
        setTours(trFilters);
        flag = false;
      } else {
        const trFilters = filterLocation.filter((tr) => {
          return tr.ID_LOCALIDAD == e.target.value;
        });
        setTours(trFilters);
        flag = true;
      }
    } else {
      setTours(bkupTours);
    }
  };

  if (tours.length == 0)
    return (
      <div className=" h-full relative z-30">
        <Banner
          title={"Servicios Tour en zonas turísticas"}
          name={"Turismo Real"}
          desc1={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid? Laboriosam maiores tenetur"
          }
          desc2={
            "vitae quidem ipsum</span> unde commodi nemo alias ipsam nam, incidunt accusantium in adipisci eius, eligendi, perspiciatis corrupti at sequi molestiae praesentium. Ut totam harum placeat, velit veritatis accusantium, doloribus asperiores repudiandae magnam maxime impedit nemo assumenda a."
          }
        />
        <h2 className="text-4xl text-center text-purple-800 underline decoration-black min-h-screen mt-40">
          No HAY Tours Disponbles
        </h2>
      </div>
    );
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
            <option value={0}>Seleccionar Localidad</option>
            {locations.map((location) => (
              <option className="" key={location.ID} value={location.ID}>
                {location.NOMBRE}
              </option>
            ))}
          </select>
        </div>
        <div className=" min-h-[50rem] container ml-4 sm:mx-auto flex flex-col sm:grid sm:grid-cols-3 2xl:grid-cols-4 gap-4 mb-8 ">
          {tours.map((tour) => (
            <div
              className="w-11/12 h-60 2xl:h-72 shadow-lg rounded-b-2xl transform transition duration-200 sm:hover:scale-105"
              key={tour.ID}
            >
              <div className="h-full w-full rounded-t-2xl">
                <img
                  src={
                    "https://ollaguatravel.com/wp-content/uploads/2015/12/Stgo1.jpg"
                  }
                  alt=""
                  className="object-cover w-full rounded-t-2xl h-3/5"
                />
                <div className="rounded-b-2xl bg-white h-2/5 flex flex-col">
                  <h3 className="ml-4 font-semibold text-lg 2xl:text-xl py-1 lining-nums">
                    {Intl.NumberFormat("es-CL", {
                      currency: "CLP",
                      style: "currency",
                    }).format(tour.PRECIO)}
                  </h3>
                  <div className="flex flex-row items-center ">
                    <h4 className="ml-4 font-semibold text-sm basis-2/5   ">
                      {tour.LOCALIDAD}{" "}
                    </h4>
                    <h3 className="font-bold basis-3/5 text-start ml-4 2xl:ml-8 text-purple-600 underline decoration-purple-500 lining-nums">
                      Cupo: {tour.CUPO}
                    </h3>
                  </div>
                  <div className="flex basis-1/4 lining-nums items-center font-semibold ">
                    <h3 className="ml-4 font-bold text-star lining-nums py-2">
                      Fecha: {tour.FECHA}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
