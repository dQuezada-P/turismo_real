import { Navigate, Outlet } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { useAuth } from "../context/hooks/useAuth";

const ProtectedRoutes = () => {
  const { user, charging } = useAuth();
  if (charging) return "Cargando....";
  return (
    <>{!user ? (<Navigate to={"/departamentos"} state={true} />):(<Outlet/>)}</>
  );
};

export default ProtectedRoutes;
