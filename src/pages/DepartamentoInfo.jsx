import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDepartment } from "../context/hooks/useDepartment";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";
import { DepartmentCardInfo } from "../components/department/DepartmentCardInfo";
import DesignSecondary from "../components/body/DesignSecondary";

export const Departamento = () => {
  const { department, setDepartment } = useDepartment();
  const { images, setImages } = useDepartment();
  const { id } = useParams();

  useEffect(() => {
    const getDept = async () => {
      const dept = await GetDepartamento(id);
      setDepartment(dept);
    };

    getDept();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      const imagesCarousel = await GetDepartamento(id)
        .then((dept) => dept.IMAGENES)
        .then((img) => img.map((ele) => ele.url));
      setImages(imagesCarousel);
    };
    getImages();
  }, [department]);

  return (
    <DesignSecondary>
      {" "}
      <div
        className="container m-auto my-8 grid gap-3 md:grid-rows-2 h-[100vh] md:h-[85vh]
  "
      >
        <DepartmentCardInfo />
      </div>
    </DesignSecondary>
  );
};
