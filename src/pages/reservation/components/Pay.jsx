import { useEffect, useState } from "react";
import { useDepartment } from "../../../context/hooks/useDepartment";
import { useReservation } from "../../../context/hooks/useReservation";
import { getTour } from "../../../services/tours/ApiRequestTour";
import { getTransport } from "../../../services/transports/ApiRequestTransport";
import { getMercadoPago } from "../../../services/mercadoPago/mercadoPago";
import { useAuth } from "../../../context/hooks/useAuth";
import { Spinner } from "../../../components/spinner/Spinner";

export const Pay = () => {
  const [valueTransport, setValueTransport] = useState(0);
  const [valueTour, setValueTour] = useState([]);
  const { reservation, flagMercado, setReservation } = useReservation();
  const [charge, setCharge] = useState();
  const { department } = useDepartment();
  const [flag, setFlag] = useState(true);
  const [chargeTran, setChargeTran] = useState(false);
  const [chargeTr, setChargeTr] = useState(false);
  const { token } = useAuth();
  const [abono, setAbono] = useState(0);
  const [totalReserva, setTotalReserva] = useState(0);
  const [tr, setTr] = useState(0);

  useEffect(() => {
    try {
      const getTran = async () => {
        if (reservation.transporte == 0) {
        } else {
          const { PRECIO } = await getTransport(reservation.transporte);
          setValueTransport(PRECIO);
        }
        setChargeTran(true);
      };
      let valueTr = 0;
      const getTr = async () => {
        if (reservation.tour != 0 && reservation.tour.length == 0) {
          const { PRECIO } = await getTour(reservation.tour);
          setValueTour(valueTour.concat(PRECIO));
          setChargeTr(true);
        } else if (reservation.tour.length >= 1) {
          const list = await Promise.all(
            reservation.tour.map(async (id) => {
              const { PRECIO } = await getTour(id);
              return PRECIO;
            })
          );
          list.forEach((value) => {
            valueTr = valueTr + value;
          });
          setTr(valueTr);
          setValueTour(list);
          setChargeTr(true);
        } else if (typeof reservation.tour == "string") {
        } else {
          setValueTour(valueTr);
        }
      };
      getTr();
      getTran();
    } catch (error) {}
  }, []);

  useEffect(() => {
    setReservation({
      ...reservation,
      abono: (reservation.valor + valueTransport + tr) * 0.2,
      total: reservation.valor + valueTransport + tr,
    });
  }, [valueTransport , valueTour]);

  useEffect(() => {
    if (flagMercado) {
      charge == null ? setCharge(true) : null;
      setTimeout(async () => {
        try {
          if (flag) {
            const idPreference = await getMercadoPago(reservation, token);
            const mp = new MercadoPago(
              "TEST-09d711eb-afb7-405b-bed2-7f54177a7dc2",
              {
                locale: "es-CL",
              }
            );
            mp.checkout({
              preference: {
                id: idPreference,
              },
              render: {
                container: ".cho-container",
                label: "Pagar",
              },
            });
            setCharge(false);
            setFlag(false);
          }
        } catch (error) {
          console.error(error);
        }
      }, 2000);
    }
  }, [flagMercado]);

  if (!chargeTr && !chargeTran) return <div></div>;

  // // if (valueTour != 0) {
  // //   valueTour.forEach((value) => {
  // //     valueTr = valueTr + value;
  // //   });
  // // }
  // console.log(reservation);
  // // console.log(valueTransport);
  // // console.log(tr);
  return (
    <div className="flex flex-col w-full h-full font-semibold">
      <h2 className="flex justify-center underline basis-[10%] my-1 text-sm 2xl:text-lg">
        Resumen de la Orden
      </h2>
      <div className="flex sm:flex-row flex-col justify-center basis-auto gap-4">
        <div className="flex flex-col basis-[50%] gap-4">
          <p className="text-sm 2xl:text-lg text-center">Datos Reserva</p>
          <div className="flex flex-row w-[80%] mx-auto items-center">
            <h3 className="text-sm 2xl:text-lg w-44">Nombre Departamento: </h3>
            <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg">
              {reservation.nombre}
            </p>
          </div>
          <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-44">Ubicación: </h3>
            <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg capitalize">
              {department.UBICACION}
            </p>
          </div>
          <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-44">Costo Arriendo: </h3>
            <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
              {Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(reservation.valor)}
            </p>
          </div>
          {/* <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-44 lining-nums">
              Costo Reservación:{" "}
            </h3>
            <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
              {Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(reservation.valor * 0.2)}
            </p>
          </div> */}
        </div>
        <div className="flex flex-col basis-[50%] w-[80%] mx-auto gap-4">
          <h2 className="text-sm 2xl:text-lg text-center">
            Servicios Adicionales
          </h2>
          <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-32">ID Transporte:</h3>
            {reservation.transporte == undefined ? (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                Omitido
              </p>
            ) : (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                {reservation.transporte}
              </p>
            )}
          </div>
          <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-32 ">Valor Transporte: </h3>
            <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
              {Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(valueTransport == undefined ? 0 : valueTransport)}
            </p>
          </div>
          <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-32">ID Tour:</h3>
            {!reservation.tour ? (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                Omitido
              </p>
            ) : reservation.tour.length == 0 ? (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                Omitido
              </p>
            ) : Array.isArray(reservation.tour) ? (
              reservation.tour.map((id, i) => (
                <p
                  key={i}
                  className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 mr-2 rounded-lg lining-nums"
                >
                  {id}
                </p>
              ))
            ) : (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                {reservation.tour}
              </p>
            )}
          </div>
          <div className="flex flex-row items-center w-[80%] mx-auto">
            <h3 className="text-sm 2xl:text-lg w-32">Valor Tour: </h3>
            {!reservation.tour ? (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                {Intl.NumberFormat("es-CL", {
                  currency: "CLP",
                  style: "currency",
                }).format(0)}
              </p>
            ) : reservation.tour.length == 0 ? (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                {Intl.NumberFormat("es-CL", {
                  currency: "CLP",
                  style: "currency",
                }).format(0)}
              </p>
            ) : Array.isArray(reservation.tour) ? (
              valueTour.map((value, i) => (
                <p
                  key={i}
                  className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 mr-2 rounded-lg lining-nums"
                >
                  {Intl.NumberFormat("es-CL", {
                    currency: "CLP",
                    style: "currency",
                  }).format(value)}
                </p>
              ))
            ) : (
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                {valueTour}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 text-center my-8 justify-center">
        <div className="flex flex-row items-center justify-end ">
          <h3 className="text-base 2xl:text-lg w-44 text-center">
            Costo Reservación:{" "}
          </h3>
          <p className="text-base 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
            {Intl.NumberFormat("es-CL", {
              currency: "CLP",
              style: "currency",
            }).format(reservation.valor + valueTransport + tr)}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <h3 className="text-base 2xl:text-lg w-32 text-center">
            Total a Pagar:{" "}
          </h3>
          <p className="text-base 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
            {Intl.NumberFormat("es-CL", {
              currency: "CLP",
              style: "currency",
            }).format((reservation.valor + valueTransport + tr) * 0.2)}
          </p>
        </div>
        {charge ? (
          <Spinner />
        ) : (
          <div id="mercadoPago" className="cho-container"></div>
        )}

        <input id="btnSubmit" hidden type="submit" />
      </div>
    </div>
  );
};
