import DesignSecondary from "../components/body/DesignSecondary";
import { TourInfo } from "./TourInfo";

export const Reserva = () => {
  
  return (
    <>
      <DesignSecondary>
        {" "}
        <div className="BoxContent h-[81.5vh]">
          <div className="BoxCardReservation bg-white h-[80%] w-[50%] absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-2 shadow-[0px_15px_15px_rgba(0,0,0,0.5)] rounded-3xl">
            <div className="BoxFlex flex flex-col md:flex-row w-full h-[90%] pt-4 px-4">
              <div className="BoxUser basis-[60%] h-full"></div>
              <div className="BoxResumary basis-[40%] h-full border-t-[1px] md:border-l-[1px] md:border-t-[0px]  border-slate-300"></div>
            </div>
            <button className="Butto bg-purple-600 flex h-auto w-11/12 md:w-1/4 mx-auto mt-4 px-4 py-2 justify-center  hover:bg-purple-700 font-semibold hover:text-white uppercase rounded-2xl" onClick={()=>{console.log('saddasd')}}>Proceder a Pagar</button>
          </div>
        </div>
      </DesignSecondary>
    </>
  );
};
