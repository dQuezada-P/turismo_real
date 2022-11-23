import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { useModal } from "../context/hooks/useModal";
import { useAuth } from "../context/hooks/useAuth";
import { useLoading } from "../context/hooks/useLoading";

import { LoadingScreen } from "../components/loadingScreen/LoadingScreen";
import { ModalInfo } from "../components/modal/ModalInfo";
import { ModalAlert } from "../components/modal/ModalAlert";


export const LayoutBase = () => {
  const { showModal, modalType, modalTypes, params } = useModal();
  const { isLoading } = useLoading();

  return (
    <>
      { isLoading ? (<LoadingScreen/>) : '' }
      { showModal ? modalType == modalTypes.info ? (<ModalInfo params={params}/>) : (<ModalAlert params={params}/>) : '' }
      <Header />
      <Content Children={<Outlet/>} />
    </>
  );
};
