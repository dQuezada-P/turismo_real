import { useEffect, useState } from "react";
import { useReservation } from "../../../context/hooks/useReservation";
import { getTour } from "../../../services/tours/ApiRequestTour";
import { getTransport } from "../../../services/transports/ApiRequestTransport";
import { getMercadoPago } from "../../../services/mercadoPago/mercadoPago";
import { useAuth } from "../../../context/hooks/useAuth";
import { Spinner } from "../../../components/spinner/Spinner";

export const Pay = ({ department }) => {
  const [valueTransport, setValueTransport] = useState(0);
  const [valueTour, setValueTour] = useState([]);
  const { reservation, flagMercado, setReservation } = useReservation();
  const [charge, setCharge] = useState();
  const [flag, setFlag] = useState(true);
  const [chargeTran, setChargeTran] = useState(false);
  const [chargeTr, setChargeTr] = useState(false);
  const { token } = useAuth();
  const [tours, setTours] = useState([]);
  const [transport, setTtransport] = useState({});
  const [tr, setTr] = useState(0);

  useEffect(() => {
    try {
      const getTran = async () => {
        if (reservation.transporte == 0) {
        } else {
          const transport = await getTransport(reservation.transporte);
          setTtransport(transport);
          setValueTransport(transport.PRECIO);
        }
        setChargeTran(true);
      };
      let valueTr = 0;
      let listValue = [];
      let listt = [];
      const getTr = async () => {
        if (reservation.tour == 0) {
        } else if (Array.isArray(reservation.tour)) {
          const list = await Promise.all(
            reservation.tour.map(async (id) => {
              const tour = await getTour(id);
              return tour;
            })
          );

          list.forEach((value) => {
            valueTr = valueTr + value.PRECIO;
            listValue.push(value.PRECIO);
          });
          setTours(list);
          setTr(valueTr);
          setValueTour(listValue);
          setChargeTr(true);
        } else {
          const tour = await getTour(reservation.tour);
          valueTr = tour.PRECIO;
          listValue.push(tour.PRECIO);
          listt.push(tour);
          setTours(listt);
          setTr(valueTr);
          setValueTour(listValue);
          setChargeTr(true);
        }
      };
      getTr();
      getTran();
    } catch (error) {}
    // return () => {
    //   setTours([]);
    //   setTr(0);
    //   setValueTour([]);
    // };
  }, []);

  useEffect(() => {
    setReservation({
      ...reservation,
      abono: ((reservation.valor*reservation.dias) + valueTransport + tr) * 0.2,
      total: ((reservation.valor*reservation.dias) + valueTransport + tr),
      tours: tours,
      transports: transport,
    });
  }, [valueTransport, valueTour]);
  useEffect(() => {
    console.log(reservation);
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
  return (
    <div className="flex flex-col w-full h-full font-semibold">
      <h2 className="flex justify-center basis-[10%] my-1 text-base 2xl:text-2xl">
        Resumen de la Orden
      </h2>
      <div className="flex sm:flex-row flex-col justify-center basis-auto gap-4">
        <div className="basis-[50%]">
          {" "}
          <div className="flex flex-col h-[90%] w-[80%] border-2 border-purple-600 dark:border-gray-700 gap-4 mx-auto m-8 py-4 rounded-2xl">
            <p className="text-sm 2xl:text-lg text-center underline underline-offset-4">
              Datos Reserva
            </p>
            <div className="flex flex-row w-[80%] mx-auto items-center">
              <h3 className="text-sm 2xl:text-lg w-44">
                Nombre Departamento:{" "}
              </h3>
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
              <h3 className="text-sm 2xl:text-lg w-44">Costo Arriendo Por Noche: </h3>
              <p className="text-sm 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
                {Intl.NumberFormat("es-CL", {
                  currency: "CLP",
                  style: "currency",
                }).format(reservation.valor)}
              </p>
            </div>
          </div>
        </div>

        <div className="basis-[50%] ">
          <div className="flex flex-col h-[90%] w-[80%] border-2 border-purple-600 dark:border-gray-700 gap-4 mx-auto m-8 py-4 rounded-2xl">
            <h2 className="text-sm 2xl:text-lg text-center underline underline-offset-4">
              Servicios Adicionales
            </h2>
            <div className="flex flex-row items-center w-[80%] mx-auto">
              <h3 className="text-sm 2xl:text-lg w-32">ID Transporte:</h3>
              {reservation.transporte == 0 ? (
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
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 text-center my-8 justify-center w-[100%] mx-auto ">
        <div className="flex flex-row items-center justify-center border-2 pr-4 rounded-2xl border-purple-600 py-2 dark:border-gray-700 ">
          <h3 className="text-base 2xl:text-lg w-60 text-center">
            Costo Reservación :{" "}
          </h3>
          <p className="text-base 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
            {Intl.NumberFormat("es-CL", {
              currency: "CLP",
              style: "currency",
            }).format((reservation.valor*reservation.dias) + valueTransport + tr)}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center border-2 pr-4 py-2 rounded-2xl border-purple-600 dark:border-gray-700 ">
          <h3 className="text-base 2xl:text-lg w-60 text-center">
            Abono a Pagar:{" "}
          </h3>
          <p className="text-base 2xl:text-lg bg-gray-200 py-1 px-2 rounded-lg lining-nums">
            {Intl.NumberFormat("es-CL", {
              currency: "CLP",
              style: "currency",
            }).format(((reservation.valor*reservation.dias) + valueTransport + tr) * 0.2)}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pb-8">
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
