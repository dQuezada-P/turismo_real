import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

export const LayoutBase = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/departamentos");
  }, []);
    return (
      <>
        <Header />
        <Content Children={<Outlet />} />
      </>
    );
};
