import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDepartment } from "../context/hooks/useDepartment";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";
import {DepartmentCardInfo} from '../components/department/DepartmentCardInfo'

export const Departamento = () => {
  const { department, setDepartment } = useDepartment();
  const { id } = useParams();


  useEffect(() => {
    const getDept = async () => {
      const dept = await GetDepartamento(id);
      setDepartment(dept);
    };

    getDept();
  }, []);

  useEffect(()=>{

  }, [department]);

  return (
    <div className="container m-auto my-8 grid gap-3 md:grid-rows-2  h-[90vh]
    ">
      <DepartmentCardInfo department=
      {department}/>
    </div>
  );
};
