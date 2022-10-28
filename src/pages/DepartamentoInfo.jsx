import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDepartment } from "../context/hooks/useDepartment";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";
import { DepartmentCardInfo } from "../components/department/DepartmentCardInfo";
import { Carousel } from "flowbite-react";

export const Departamento = () => {
  const { department, setDepartment } = useDepartment();
  const [flag, setFlag] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getDept = async () => {
        const dept = await GetDepartamento(id);
        setDepartment(dept);
        setFlag(false);
      };
      getDept();
    } catch (error) {}
  }, []);

  if (flag) return <div>cargandoo...</div>;

  return (
    <div className="container mx-auto sm:flex sm:flex-col relative z-30 my-2 gap-4 top-[20rem] sm:top-0 min-h-screen sm:w-full sm:items-center 2xl:justify-center">
      <div className=" h-96 sm:h-70 2xl:h-[30rem] mx-4 sm:w-2/4 2xl:w-4/6 bg-white sm:mx-0">
        <div className="w-full h-full sm:flex sm:flex-row">
          <div className="w-full h-full basis-3/5"></div>
          <div className="w-full h-full basis-2/5 flex sm:items-center">
            <div className="w-full h-4/5 border-gray-200 border-t-[1px] sm:border-t-[0px] sm:border-l-[1px] 2xl:border-l-[2px] bg-white">
            </div>
          </div>
        </div>
      </div>
      <div className=" h-72 sm:h-64 2xl:h-96 mx-4 sm:w-2/4 2xl:w-4/6 sm:mx-0 top-[28rem] sm:top-0 relative sm:z-30 ">
        <Carousel>
          {department.IMAGENES.map((img) => (
            <img
              src={`${img.url}`}
              alt="Imagen"
              className="object-cover object-center"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
