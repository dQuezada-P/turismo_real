import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useReservation } from "../context/hooks/useReservation";
import { FooterBase } from "./footer/FooterBase";
import { Header } from "./header/Header";
import { Alert } from "./modal/Alert";

export const Layout = () => {
  const { reservation, setReservation } = useReservation();
  const [time, setTime] = useState(true);
  const [flag, setFlag] = useState(true);
  let pay;
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  }, []);

  reservation.status == "approved" ? (pay = true) : (pay = false);

  return flag ? (
    <>
      <Header></Header>
      {reservation.status ? <Alert alert={pay} /> : null}
      <FooterBase />
    </>
  ) : (
    <>
      <Header />
      <div className={`${
          "min-h-[calc(100vh - 176px)]"
      }`}>
        <Outlet/>

      </div>
      
      <FooterBase />
    </>
  );
};
