import { FaRegUserCircle } from "react-icons/all";
import { useAuth } from '../../context/hooks/useAuth';


export const Login = () => {
  const { user, isLogged } = useAuth();
  return (
    <div className=" block md:flex text-center">
      {" "}
      { isLogged
        ? (
          <h1>Usuario Logueado xd {user.CORREO}</h1>
        )
        : (
          <button className=" md:flex md:justify-center md:items-center gap-1 text-sm text-purple-600">
            <FaRegUserCircle className="  text-4xl text-purple-600" />
          </button>
        )}
      
    </div>
  );
};
