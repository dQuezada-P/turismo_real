import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/hooks/useAuth";

const ProtectedRoutes = () => {
  const { user, charging } = useAuth();
  if (charging) return "Cargando....";
  return (
    <>{user ? <Outlet /> : <Navigate to={"/departamentos"} state={true} />}</>
  );
};

export default ProtectedRoutes;
