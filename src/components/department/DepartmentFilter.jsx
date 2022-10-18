import { useEffect } from "react";
import { useState } from "react";
import { getLocations } from "../../services/locations/locations.js";
import { useDepartment } from "../../context/hooks/useDepartment";

export const DepartmentFilter = () => {
  const [locations, setLocations] = useState([]);
  const { departments, setDepartments } = useDepartment();
  const [filterLocation, setFilterLocation] = useState(departments);
  let flag;
  useEffect(() => {
    const getStates = async () => {
      const states = await getLocations();
      setLocations(states);
      flag = true;
    };
    getStates();
  }, []);

  const handleFilterLocation = (e) => {
    if (e.target.value != "") {
      if (flag) {
        const deptFilters = departments.filter((dept) => {
          return dept.UBICACION == e.target.value;
        });
        setDepartments(deptFilters);
        flag = false;
      } else {
        const deptFilters = filterLocation.filter((dept) => {
          return dept.UBICACION == e.target.value;
        });
        setDepartments(deptFilters);
        flag = true;
      }
    }else{
      setDepartments(filterLocation)
    }
  };
  

  return (
    <div className="relative md:static">
      <div className="md:flex md:flex-col ">
        <h2 className="font-semibold text-center text-black text-2x1 md:text-left md:text-3xl md:text-purple-600 md:py-4  ">
          Búsqueda Avanzada
        </h2>
        <div className="block text-center py-4 md:flex md:gap-4 items-center bg-white ">
          <h5 className="font-semibold">Localidad:</h5>
          <div className="shadow-lg rounded-lg p-2 flex justify-center">
            <div className="w-full text-center ">
              <select
                className="form-select blockw-full px-3 py-1.5 text-base font-normaltext-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-purple-700 focus:bg-white focus:border-black focus:outline-none" 
                aria-label="Seleccionar"
                onChange={handleFilterLocation}
              >
                <option className="" value={""}>
                  --- Seleccionar ---
                </option>
                {locations.map((location) => (
                  <option
                    className=""
                    key={location.ID}
                    value={location.NOMBRE}
                  >
                    {location.NOMBRE}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h5 className="font-semibold">N Dormitorios:</h5>
          <div className="shadow-lg rounded-lg  p-2">
            {" "}
            <select
              className="form-select blockw-full px-3 py-1.5 text-base font-normaltext-black bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-purple-700 focus:bg-white focus:border-black focus:outline-none"
              aria-label="Default select example"
            >
              <option value={""}>--- Seleccionar ---</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
