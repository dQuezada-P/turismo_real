import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { useLoading } from "../context/hooks/useLoading";
import { useModal } from "../context/hooks/useModal";

import { LoadingScreen } from "../components/loadingScreen/LoadingScreen";
import { ModalInfo } from "../components/modal/ModalInfo";
import { ModalAlert } from "../components/modal/ModalAlert";


export const LayoutBase = () => {
  const { isLoading } = useLoading();
  const { showModal, modalType, modalTypes, params } = useModal();

  useEffect(() => {
    
  }, []);

  return (
    <>
      { isLoading ? (<LoadingScreen/>) : '' }
      { showModal ? modalType == modalTypes.info ? (<ModalInfo params={params}/>) : (<ModalAlert params={params}/>) : '' }
      <Header />
      <Content Children={<Outlet/>}  />
    </>
  );
};
