import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/hooks/useAuth";
import { addReservation } from "../services/reservation/ApiRequestReservation";
import { ModalAlertSuccess } from "../components/modal/ModalAlertSuccess";
import { ModalAlertReject } from "../components/modal/ModalAlertReject";
import { GetDepartamento } from "../services/department/ApiRequestDepartment";

export const Notificacion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const payid = searchParams.get("payment_id");
  const [payment, setPayment] = useState({});
  const [flag, setFlag] = useState(true);
  const { token } = useAuth();
  const navigate = useNavigate();
  const [alertS, setAlertS] = useState(false);
  const [alertR, setAlertR] = useState(false);
  const [charge, setCharge] = useState(false);
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
      }
    } catch (error) {
      console.error(error);
    }
    // if (payment.status == "approved") {
    //   try {
    //     const reserv = async () => {
    //       const dep = await GetDepartamento(
    //         payment.reservation.reservation.id_dep
    //       );
    //       if (dep.ESTADO_RESERVA == "Y") {
    //         while (!resToken) {
    //           async function reser() {
    //             await addReservation(payment, token);
    //           }
    //           reser();
    //         }
    //         setResToken(true);
    //         setAlertS(true);
    //         setCharge(true);
    //         result();
    //       } else {
    //         setAlertR(true);
    //         setCharge(true);
    //       }
    //     };
    //     reserv();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   setAlertR(true);
    //   setCharge(true);
    // }
    setTimeout(() => {
      navigate("/departamentos");
    }, 4000);
  });

  if (!charge) return <div className="h-screen relative z-30"></div>;

  if (alertS)
    return (
      <div className="h-screen relative z-30">
        <ModalAlertSuccess payment={payment} />
      </div>
    );
  else if (alertR)
    return (
      <div className="h-screen relative z-30">
        <ModalAlertReject />
      </div>
    );

  return (
    <>
      {" "}
      <div className="h-screen relative z-30"></div>
    </>
  );
};
