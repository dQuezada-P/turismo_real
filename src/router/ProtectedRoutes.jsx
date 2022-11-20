import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/hooks/useAuth";

const ProtectedRoutes = () => {
  const { user } = useAuth();
  return (
    <>{!user ? (<Navigate to={"/departamentos"} />):(<Outlet/>)}</>
  );
};

export default ProtectedRoutes;
