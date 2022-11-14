import { Checkbox, Dropdown, Radio, Table } from "flowbite-react";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import $ from "jquery";
import { useFormContext } from "react-hook-form";
import { useTransport } from "../../../context/hooks/useTransport";
import { useTour } from "../../../context/hooks/useTour";
import { useEffect, useState } from "react";
import { useReservation } from "../../../context/hooks/useReservation";

export const Service = () => {
  const { reservation, setReservation } = useReservation();
  const [titleTransporte, setTitleTransporte] = useState(true);
  const [flagTransporte, setFlagTransporte] = useState(true);
  const [titleTour, setTitleTour] = useState(true);
  const [flagTour, setFlagTour] = useState(true);
  const divTransport = $("#transport");
  const oTransport = $("#oTransport");
  const divTour = $("#tour");
  const otour = $("#otour");
  const { transportList, setFlagTra } = useTransport();
  const { tourList, setFlagTr } = useTour();
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
    } else if (oTransport.is(":hidden")) {
      oTransport.removeClass("hidden");
    }
    if (divTransport.is(":visible")) {
      divTransport.slideUp();
      setTitleTransporte(true);
      setFlagTransporte(true);
    }
    unregister("transport");
    setFlagTra(true);
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
    } else if (otour.is(":hidden")) {
      otour.removeClass("hidden");
    }
    if (divTour.is(":visible")) {
      divTour.slideUp();
      setTitleTour(true);
      setFlagTour(true);
    }
    unregister("tour");
    setFlagTr(true);
  };

  $("input[type=radio]").change(function () {
    setFlagTra(true);
  });
  $("input[type=checkbox]").change(function () {
    setFlagTr(true);
  });

  return (
    <div className="flex flex-col items-center gap-4 font-semibold h-full ">
      <p className="flex text-xs w-[95%] mt-4 underline ml-2">
        Debe seleccionar un servicio / Omitir un servicio
      </p>
      <div className="w-[95%] mt-2 rounded-lg bg-gray-100 ">
        <div className="border-b-2 border-gray-700 flex items-center place-items-center py-1 gap-4 ">
          <p className="text-sm ml-2 2xl:text-base">Servicios Transportes</p>
          <p id="oTransport" className="text-red-700 hidden ">
            Ha Escogido Omitir el Servicio!
          </p>
          <p>{errors.transport?.message}</p>
        </div>
        <input id="btnSubmit" hidden type="submit" />
        <div className="py-2 ml-4 text-sm w-min">
          <Dropdown
            inline={false}
            label={titleTransporte ? "Seleccionar" : "Volver"}
          >
            <Dropdown.Item>
              <button
                className="py-1 px-2"
                type="button"
                onClick={handleTransporte}
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
                    {tran.PRECIO}
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
      <div className="w-[95%] mt-2 rounded-lg bg-gray-100 mb-4 ">
        <div className="border-b-2 border-gray-700 flex items-center place-items-center py-1 gap-4 ">
          <p className="text-sm ml-2 2xl:text-base">Servicios Tour</p>
          <p id="otour" className="text-red-700 hidden ">
            Ha Escogido Omitir el Servicio!
          </p>
        </div>
        <div className="py-2 ml-4 text-sm w-min">
          <Dropdown label={titleTour ? "Seleccionar" : "Volver"}>
            <Dropdown.Item>
              <button className="py-1 px-2" type="button" onClick={handleTour}>
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
                    {tr.PRECIO}
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
