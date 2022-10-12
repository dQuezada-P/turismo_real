import { useDepartment } from "../context/hooks/useDepartment";
import { DepartmentCard } from "../components/department/DepartmentCard";
import { DepartmentFilter } from "../components/department/DepartmentFilter";
import { Spinner } from "../components/spinner/Spinner";
import { useEffect } from "react";
import Body from "../components/body/Disenno";
export const Departamentos = () => {
  const { departments, setDepartments } = useDepartment();
  const { charging, setCharging } = useDepartment();
  const { imageCharge, setImageCharge } = useDepartment();

  return charging ? (
    <div className="md:h-[calc(100vh-176px)]">
      {" "}
      <Spinner />
    </div>
  ) : (
    <>
      <Body><div></div></Body> 
      <div
        className={`${
          departments.length < 5
            ? " mx-6 md:mx-40 md:h-[calc(100vh-176px)]  bg-white relative z-20 overflow-hidden"
            : " mx-6 md:mx-40 bg-white relative z-20 overflow-hidden"
        }`}
      >
        <div className="bg-bars-body absolute">
          <div className=" bg-yellow-400 "></div>
          <div className=" bg-purple-600"></div>
        </div>
        <DepartmentFilter />
        {departments == [] ? (
          <div className="w-full h-full text-center md:flex md:items-start md:pt-20 md:justify-center relative z-30">
            <p className="text-4xl font-semibold text-purple-700">
              No Hay Departamentos Disponibles
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 mb-12 gap-4 relative z-30 ">
            {departments.map((depto) => (
              <div className="shadow-2xl rounded-3xl bg-white" key={depto.ID}>
                <DepartmentCard depto={depto} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
