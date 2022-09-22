import {
  VscHeart,
  RiShareForwardLine,
  MdBathtub,
  IoBedSharp,
  FaMapMarkedAlt
} from "react-icons/all";

export const DepartmentCardInfo = ({ department }) => {
  const {
    id,
    nombre,
    numero_banno,
    numero_Habitacion,
    fecha,
    direccion,
    valor_arriendo,
    ubicacion,
    descripcion,
  } = department;

  return (
    <>
      {" "}
      <div className="Cajacard md:grid md:grid-cols-3 mx-2 md:w-4/6 md:mx-auto shadow-2xl rounded-3xl ">
        <div className="Cajacard_corazon md:col-span-2 md:rounded-l-3xl md:h-full h-1/2 mx-8 rounded-t-3xl md:rounded-tr-none md:mx-0.5 flex justify-center items-center">
          <div className="w-11/12 h-5/6 bg-white md:border-r-2  border-gray-200 ">
            <div className="text-3xl h-1/6 flex gap-2 items-center">
              <button>
                <VscHeart />
              </button>
              <button>
                {" "}
                <RiShareForwardLine />
              </button>
            </div>
            
            <div className="Cajacard_info_dept bg-gray-300 w-11/12 mx-auto h-5/6 shadow-xl rounded-3xl flex flex-col justify-center items-center">
              <h3 className="md:mx-20 w-full py-2 md:text-3xl text-center">
                Departamento en Arriendo
              </h3>
              <h2 className="md:mx-20 w-full py-2 md:text-3xl text-center">
                ${valor_arriendo}-CLP
              </h2>
              <dir className="flex w-full justify-center md:gap-8">
                <div>
                  <h2 className="flex items-center gap-4 text-3xl ">
                    {numero_Habitacion}
                    <span>
                      <IoBedSharp />
                    </span>
                  </h2>
                  <span>Habitaciones</span>
                </div>
                <div>
                  <h2 className="flex items-center gap-4 text-3xl ">
                    {numero_banno}
                    <span>
                      <MdBathtub />
                    </span>
                  </h2>
                  <span>Baños</span>
                </div>
              </dir>
            </div>
          </div>
        </div>
        <div className="Cajacard_info md:col-span-1 md:rounded-r-3xl md:h-full h-1/2 mx-8 rounded-b-3xl md:rounded-tl-none md:rounded-bl-none md:mx-0.5 grid grid-rows-5  ">
          <div className="md:ml-16 border-b-1 border-gray-400">
            {" "}
            <h4 className="flex justify-center font-semibold">Actualizado:#</h4>
            <h4 className="flex justify-center font-semibold">Publicado:#</h4>
          </div>
          <h4 className="flex justify-center font-semibold">
            Código Departamento {id}
          </h4>
          <h4 className="flex  font-semibold">#Estacionamientos</h4>
          <h4 className="flex  font-semibold">#Amoblado</h4>
          <h4 className="flex  font-semibold">Piso#</h4>
          <h4 className="flex justify-end gap-1 items-center font-semibold mb-5 mr-8 text-3xl"><FaMapMarkedAlt/><span className="text-sm">Ver Mapa</span></h4>
        </div>
      </div>
      <div className="Cajacard_img bg-gradient-to-t from-blue-900 to-blue-500 w-full   md:w-4/6 md:mx-auto rounded-3xl "></div>
    </>
  );
};
