import { useEffect } from "react";
import { CgLogOut, FaRegUserCircle } from "react-icons/all";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/hooks/useAuth";
import { HttpGet } from "../../services/ApiRequest";

export const Login = () => {
  const { user, setUser, isLogged, token , setToken} = useAuth();

  const handleOnClick = ()=>{
    localStorage.removeItem('token')
    setUser(null)
    setToken(localStorage.getItem("token"))
  }

  return (
    <div className=" flex justify-center md:flex text-center ">
      {" "}
      {isLogged() ? (
        <div className="md:flex items-center gap-4 ">
          <h1 className="border-2 border-purple-600 rounded-lg p-1 uppercase">
         {`hola, ${user.NOMBRE} ${user.APELLIDO}`}
          </h1>
          <button className="text-purple-600 hover:text-purple-400 text-2xl py-2 md:py-0 flex items-center" onClick={handleOnClick}> 
         <CgLogOut/> <span className="text-base font-semibold">Cerrar Sesión</span>
          </button>
        </div>
      ) : (
        <Link
          to={"/login"}
          className="  md:flex md:justify-center md:items-center gap-1 text-sm text-purple-600"
        >
          <FaRegUserCircle className="  text-4xl text-purple-600" />
        </Link>
      )}
    </div>
  );
};
