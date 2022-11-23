import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/hooks/useAuth";
import { useLoading } from "../context/hooks/useLoading";

const ProtectedRoutes = () => {
  const { isLogged, tokenVerified } = useAuth();

  return (
    <>
      {
        tokenVerified ? isLogged() ? (<Outlet/>) : <Navigate to={"/departamentos"} /> : ('')
      }
    </>


    // <>{!isLogged() ? (<Navigate to={"/departamentos"} />):(<Outlet/>)}</>
  );
};

export default ProtectedRoutes;
