import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/hooks/useAuth";
import { useReservation } from "../context/hooks/useReservation";

export const Notificacion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const payid = searchParams.get("payment_id");
  const [payment, setPayment] = useState({});
  const [flag, setFlag] = useState(true);
  const { token } = useAuth();
  const { reservation, setReservation } = useReservation();
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
    const binds = {
      token,
      payment,
    };
    console.log(payment)

    if (!flag)
      try {
        axios.post("http://localhost:3000/api/reserva", binds);
        setReservation(payment);
        navigate("/departamentos");
      } catch (error) {
        console.error(error);
      }
  });

  return <></>;
};
