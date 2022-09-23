import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/all";
import FooterNavegator from "../footer/FooterNavegator";

export const FooterBase = () => {
  return (
    <footer className="bg-fondo_footer bg-left md:h-24 w-full">
      <div className="md:flex md:justify-center grid grid-rows-2 gap-16  box-border md:h-20  ">
        <div className="row-start-2 ">
          <Link
            className={
              " block text-center md:grid md:grid-cols-2 text-black md:text-white font-semibold text-4xl lg:w-40 "
            }
            to={"/Home"}
          >
            <FaRegBuilding className="  md:row-start-2 ml-40 md:ml-11 shadow-sm text-black md:text-white" />
            Turismo
            <span className="sm:mr-16 md:row-start-2 text-black md:text-gold-200">Real</span>
          </Link>
        </div>
        <FooterNavegator />
    
      </div>
    </footer>
  );
};
