import { FaRegBuilding } from "react-icons/all";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
    <Link className={' block text-center md:grid md:grid-cols-2  text-purple-600 font-semibold text-4xl lg:w-40 '}to={'/'}><FaRegBuilding className="  md:row-start-2 ml-40 md:ml-11 shadow-sm text-purple-600" />Turismo<span className="sm:mr-16 md:row-start-2 text-gold-200">Real</span></Link>
    </div>
  );
};
