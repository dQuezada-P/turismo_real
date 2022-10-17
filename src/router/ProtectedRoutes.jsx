import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/hooks/useAuth";

const ProtectedRoutes = () => {
  const { isLogged } = useAuth();
  return isLogged() ? <Outlet/> : <Navigate  to={'/departamentos'}/>
};

export default ProtectedRoutes