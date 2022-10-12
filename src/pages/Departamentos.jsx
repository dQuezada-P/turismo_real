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
      <Body
        title={"Arriendo de departamentos"}
        name={"Turismo Real"}
        desc1={"Si deseas viajar y conocer lugares turísticos en el país,"}
        desc2={
          "es el lugar correcto. Como empresa ofrecemos los mejores servicios de arriendo de departamentos, servicio de transporte y también tours a las mejores zonas turísticas cercanas a los departamentos."
        }
        desc3={'Para la comodidad de nuestros clientes ofrecemos la facilidad de interactuar con nosotros de manera online, fácil y secilla, si presentas cualquier consulta no dudes en hablarnos, toda la información se encuentra en la sección'}
      >
        <div
          className={`${
            departments.length < 5
              ? " mx-6 md:mx-40 md:h-[calc(100vh-176px)]"
              : " mx-6 md:mx-40 "
          }`}
        >
          <DepartmentFilter />
          {departments == [] ? (
            <div className="w-full h-full text-center md:flex md:items-start md:pt-20 md:justify-center relative z-30 ">
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
      </Body>
    </>
  );
};
