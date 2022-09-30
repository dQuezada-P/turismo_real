import { FaRegUserCircle } from "react-icons/all";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/hooks/useAuth';


export const Login = () => {
  const { user, isLogged } = useAuth();
  return (
    <div className=" block md:flex text-center">
      {" "}
      { isLogged
        ? (
          <h1>{user.NOMBRE} {user.APELLIDO}</h1>
        )
        : (
          <Link to={'/login'} className=" md:flex md:justify-center md:items-center gap-1 text-sm text-purple-600">
              <FaRegUserCircle className="  text-4xl text-purple-600" />
          </Link>
        )}
      
    </div>
  );
};
