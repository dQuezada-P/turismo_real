export const DepartmentFilter = () => {
  return (
    <div className="">
      <h2 className="font-semibold text-2xl text-center  py-4  ">
        Búsqueda Avanzada
      </h2>
      <div className="block text-center py-4 md:flex md:gap-8 items-center bg-white">
        <h5 className="font-semibold">Localidad:</h5>
        <div className="shadow-lg rounded-lg  p-2">
          {" "}
          <select>
            <option value={""}>--- Seleccionar ---</option>
          </select>
        </div>
        <h5 className="font-semibold">N Dormitorios:</h5>
        <div className="shadow-lg rounded-lg  p-2">
          {" "}
          <select name="">
            <option value={""}>--- Seleccionar ---</option>
          </select>
        </div>

      </div>
    </div>
  );
};
