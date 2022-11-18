import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { useLoading } from "../context/hooks/useLoading";
import { LoadingScreen } from "../components/loadingScreen/LoadingScreen";


export const LayoutBase = () => {
  const navigate = useNavigate();
  const { isLoading } = useLoading();

  useEffect(() => {
    
  }, []);

  return (
    <>
      { isLoading ? (<LoadingScreen/>) : '' }
      <Header />
      <Content Children={<Outlet/>}  />
    </>
  );
};
