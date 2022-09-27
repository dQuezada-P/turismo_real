import { FaRegUserCircle } from "react-icons/all";
import { useAuth } from '../../context/hooks/useAuth';


export const Login = () => {
  const { user, isUser } = useAuth();
  return (
    <div className=" block md:flex text-center">
      {" "}
      { isUser()
        ? (
          <h1>Usuario Logueado xd</h1>
        )
        : (
          <button className=" md:flex md:justify-center md:items-center gap-1 text-sm text-purple-600">
            <FaRegUserCircle className="  text-4xl text-purple-600" />
          </button>
        )}
      
    </div>
  );
};
