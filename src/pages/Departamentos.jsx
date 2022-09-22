import { useDepartment } from "../context/hooks/useDepartment";
import { DepartmentCard } from "../components/department/DepartmentCard";
import { DepartmentFilter } from "../components/department/DepartmentFilter";
export const Departamentos = () => {
  const { departments, setdepartments } = useDepartment();

  return (
    <div className=" mx-6 md:mx-40">
      <DepartmentFilter  />
      <div className="grid md:grid-cols-3 grid-rows-6 gap-8">
        {departments.map((depto) => (
          <div className="shadow-2xl rounded-3xl" key={depto.id}>
            <DepartmentCard depto={depto} />
          </div>
        ))}
      </div>
    </div>
  );
};
