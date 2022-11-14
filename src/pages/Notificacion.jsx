import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/hooks/useAuth";
import { useReservation } from "../context/hooks/useReservation";
import { addReservation } from "../services/reservation/ApiRequestReservation";

export const Notificacion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const payid = searchParams.get("payment_id");
  const [payment, setPayment] = useState({});
  const [flag, setFlag] = useState(true);
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
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
          setFlag(false);
        };
        validationPay();
      }
    } catch (error) {
      console.error(error);
    }

    if (payment.status == "approved")
      try {
        const result = async () => {
          const res = await addReservation(payment, token);
          console.log(res);
          navigate("/departamentos");
        };
        result();
        // axios.post("http://localhost:3000/api/reserva", payment);
        // navigate("/departamentos");
      } catch (error) {
        console.error(error);
      }
  });

  return <></>;
};
