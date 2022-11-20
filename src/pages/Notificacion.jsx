import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";

import { addReservation } from "../services/reservation/ApiRequestReservation";
import { useAuth } from "../context/hooks/useAuth";
import { useModal } from "../context/hooks/useModal";

export const Notificacion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const payid = searchParams.get("payment_id");
  const { token } = useAuth();
  const navigate = useNavigate();
  const [charge, setCharge] = useState(false);
  const { setShowModal, setModalType, modalTypes, setParams, params } = useModal();


  useEffect(() => {
    console.log('render')
    try {
      if (flag) {
        const validationPay = async () => {
          const { data } = await axios.post(
            "http://localhost:3000/api/mercadopago/webhook",
            {
              id: payid,
            }
          );
          setPayment(data);
          if (data.status == "approved") {
            const dep = await GetDepartamento(
              data.reservation.reservation.id_dep
            );
            if (dep.ESTADO_RESERVA == "Y") {
              await addReservation(data, token);
              console.log("a");
              setAlertS(true);
              setCharge(true);
            } else {
              setAlertR(true);
              setCharge(true);
            }
          } else {
            setAlertR(true);
            setCharge(true);
          }
          setFlag(false);
        };

      validationPay();
      
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (!charge) return <div className="h-screen relative z-30"></div>;

  return <></>;
};
