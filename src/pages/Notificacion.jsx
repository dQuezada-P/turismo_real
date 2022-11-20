import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";

import { addReservation } from "../services/reservation/ApiRequestReservation";
import { useAuth } from "../context/hooks/useAuth";
import { useModal } from "../context/hooks/useModal";

export const Notificacion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const payid = searchParams.get("payment_id");
  const { token } = useAuth();
  const { setShowModal, setModalType, modalTypes, setParams, params } = useModal();


  useEffect(() => {
    console.log('render Notificación')
    try {
      const validationPay = async () => {
        const { data } = await axios.post(
          "http://localhost:3000/api/mercadopago/webhook",
          {
            id: payid,
          }
        );

        let modalParams = {};

        if (data.status == "approved") {
          await addReservation(data, token);
          
          modalParams = {
            success: true,
            title: "Reserva Exitosa!",
            message: <p>Mensaje bonito {data.reservation.reservation.id_dep}</p>
          };
          
        } else {
          modalParams = {
            success: false,
            title: "No se pudo realizar la reserva!",
            message: <p>Mensaje feo {data.status}</p>
          };
        }

        modalParams.redirect_to = '/perfil';
        setParams(modalParams);
        setModalType(modalTypes.info);
        setShowModal(true);

      };

      validationPay();
      
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <></>;
};
