import { Checkbox, Dropdown, Radio, Table } from "flowbite-react";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import $ from "jquery";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { useReservation } from "../../../context/hooks/useReservation";

export const Service = ({ tourList, setFlagTr, transportList, setFlagTra }) => {
  const { reservation, setReservation } = useReservation();
  const [titleTransporte, setTitleTransporte] = useState(true);
  const [flagTransporte, setFlagTransporte] = useState(true);
  const [titleTour, setTitleTour] = useState(true);
  const [flagTour, setFlagTour] = useState(true);
  const divTransport = $("#transport");
  const oTransport = $("#oTransport");
  const divTour = $("#tour");
  const otour = $("#otour");
  const [registerTran, setRegisterTran] = useState({});
  const {
    register,
    formState: { errors },
    unregister,
  } = useFormContext();

  useEffect(() => {
    $("input:radio").prop("checked", false);
    setRegisterTran(!flagTransporte ? { ...register("transport") } : {});
  }, [flagTransporte]);
  useEffect(() => {
    $("input:checkbox").prop("checked", false);
  }, []);

  const handleTransporte = () => {
    if (divTransport.is(":visible")) {
      divTransport.slideUp();
      setFlagTransporte(true);
      setTitleTransporte(true);
      $("input:radio").prop("checked", false);
      unregister("transport");
      setFlagTra(false);
    } else if (divTransport.is(":hidden")) {
      divTransport.slideDown();
      setFlagTransporte(false);
      setTitleTransporte(false);
    }
    if (oTransport.is(":visible")) {
      oTransport.addClass("hidden");
    }
  };
  const handleOmitirTransporte = () => {
    if (oTransport.is(":visible")) {
      oTransport.addClass("hidden");
      setFlagTra(false);
    } else if (oTransport.is(":hidden")) {
      oTransport.removeClass("hidden");
      setFlagTra(true);
    }
    if (divTransport.is(":visible")) {
      divTransport.slideUp();
      setTitleTransporte(true);
      setFlagTransporte(true);
    }
    unregister("transport");
    setReservation({ ...reservation, transporte: null });
  };

  const handleTour = () => {
    if (divTour.is(":visible")) {
      divTour.slideUp();
      setTitleTour(true);
      setFlagTour(true);
      setFlagTr(false);
      unregister("tour");
      setReservation({ ...reservation, tour: false });
    } else if (divTour.is(":hidden")) {
      divTour.slideDown();
      setTitleTour(false);
      setFlagTour(false);
    }
    if (otour.is(":visible")) {
      otour.addClass("hidden");
    }
  };

  const handleOmitirTour = () => {
    if (otour.is(":visible")) {
      otour.addClass("hidden");
      setFlagTr(false);
    } else if (otour.is(":hidden")) {
      otour.removeClass("hidden");
      setFlagTr(true);
    }
    if (divTour.is(":visible")) {
      divTour.slideUp();
      setTitleTour(true);
      setFlagTour(true);
    }
    unregister("tour");
  };

  $("input[type=radio]").change(function () {
    setFlagTra(true);
  });
  $("input[type=checkbox]").change(function () {
    setFlagTr(true);
  });
  return (
    <div className="flex flex-col items-center gap-4 font-semibold h-full ">
      <p className="flex text-xs 2xl:text-2xl w-[95%] mt-4 underline ml-2">
        Debe seleccionar un servicio / Omitir un servicio
      </p>
      <div className="w-[95%] mt-2 rounded-lg bg-gray-100 dark:bg-gray-500 ">
        <div className="border-b-2 border-gray-700 flex items-center place-items-center py-1 gap-4 ">
          <p className="text-sm ml-2 2xl:text-xl">Servicios Transportes</p>
          <p id="oTransport" className="text-red-700 hidden ">
            Ha Escogido Omitir el Servicio!
          </p>
          <p>{errors.transport?.message}</p>
          <p
            id=""
            className={
              !transportList.length == 0 ? `hidden` : "text-red-700 uppercase"
            }
          >
            *No existen servicios de transporte para este departamento*
          </p>
        </div>
        <input id="btnSubmit" hidden type="submit" />
        <div className="py-2 ml-4 text-sm w-min">
          <Dropdown
            inline={false}
            color='purple'
            label={titleTransporte ? "Seleccionar" : "Volver"}
          >
            <Dropdown.Item>
              <button
                className="py-1 px-2"
                type="button"
                onClick={handleTransporte}
                disabled={transportList.length == 0 ? "disabled" : ""}
              >
                {flagTransporte ? "Agregar Servicio" : "Cerrar Ventana"}
              </button>{" "}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              {" "}
              <button
                id="omiTransport"
                type="button"
                className="w-full py-1 px-2"
                onClick={handleOmitirTransporte}
              >
                Omitir
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div
          id="transport"
          className="w-[95%] rounded-lg mx-auto hidden overflow-auto "
        >
          <Table hoverable={true} className="mb-4">
            <Table.Head>
              <Table.HeadCell className="text-xs 2xl:text-base">
                Terminal
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-base">
                Conductor
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-base">
                Fecha
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-base">
                Horario
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-base">
                Precio
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-base">
                Escoger
              </Table.HeadCell>
            </Table.Head>
            <TableBody className="overflow-scroll h-1">
              {transportList.map((tran) => (
                <TableRow key={tran.ID}>
                  <TableCell className="text-xs 2xl:text-base">
                    {tran.TERMINAL}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-base">
                    {tran.CONDUCTOR}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-base lining-nums">
                    {tran.FECHA}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-base lining-nums">
                    {tran.HORARIO}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-base lining-nums">
                    {Intl.NumberFormat("es-CL", {
                      currency: "CLP",
                      style: "currency",
                    }).format(tran.PRECIO)}
                  </TableCell>
                  <TableCell className="text-center">
                    <Radio
                      className="rTransport"
                      type="radio"
                      name={`transport${tran.ID}`}
                      value={tran.ID}
                      onChange={(e) => {
                        setFlagTra(true);
                      }}
                      {...registerTran}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="w-[95%] mt-2 rounded-lg bg-gray-100 dark:bg-gray-500 mb-4 ">
        <div className="border-b-2 border-gray-700 flex items-center place-items-center py-1 gap-4 ">
          <p className="text-sm ml-2 2xl:text-xl">Servicios Tour</p>
          <p id="otour" className="text-red-700 hidden ">
            Ha Escogido Omitir el Servicio!
          </p>
          <p>{errors.transport?.message}</p>
          <p
            id=""
            className={
              !tourList.length == 0 ? `hidden` : "text-red-700 uppercase"
            }
          >
            *No existen servicios de tour para este departamento*
          </p>
        </div>
        <div className="py-2 ml-4 text-sm w-min">
          <Dropdown label={titleTour ? "Seleccionar" : "Volver"} color='purple'>
            <Dropdown.Item>
              <button
                className="py-1 px-2"
                type="button"
                onClick={handleTour}
                disabled={tourList.length == 0 ? "disabled" : ""}
              >
                {flagTour ? "Agregar Servicio" : "Cerrar Ventana"}
              </button>{" "}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              {" "}
              <button
                id="omiTour"
                type="button"
                className="w-full py-1 px-2 "
                name="transport"
                onClick={handleOmitirTour}
              >
                Omitir
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div
          id="tour"
          className="w-[95%] rounded-lg mx-auto overflow-hidden hidden"
        >
          <Table hoverable={true} className="mb-4">
            <Table.Head>
              <Table.HeadCell className="text-xs 2xl:text-sm">
                Descripción
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-sm">
                Fecha
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-sm">
                Cupos
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-sm">
                Precio
              </Table.HeadCell>
              <Table.HeadCell className="text-xs 2xl:text-sm">
                Acción
              </Table.HeadCell>
            </Table.Head>
            <TableBody>
              {tourList.map((tr) => (
                <TableRow key={tr.ID}>
                  <TableCell className="text-xs 2xl:text-sm ">
                    {tr.DESCRIPCION}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-sm lining-nums">
                    {tr.FECHA}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-sm ">
                    {tr.CUPO}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-sm lining-nums">
                    {Intl.NumberFormat("es-CL", {
                      currency: "CLP",
                      style: "currency",
                    }).format(tr.PRECIO)}
                  </TableCell>
                  <TableCell className="text-xs 2xl:text-sm">
                    <Checkbox
                      type="checkbox"
                      id={`tour`}
                      value={tr.ID}
                      {...register(`tour`)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
