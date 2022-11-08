import { Dropdown, Table } from "flowbite-react";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import $ from "jquery";
import { useFormContext } from "react-hook-form";
import { useTransport } from "../../../context/hooks/useTransport";
import { useTour } from "../../../context/hooks/useTour";
import { useState } from "react";

export const Service = () => {
  const [btn, setBtn] = useState(true);
  const divTransport = $("#transport");
  const oTransport = $("#oTransport");
  const btnTransport = $("#omiTransport");
  const divTour = $("#tour");
  const otour = $("#otour");
  const btnTour = $("#omiTour");
  const radionBtnTransport = $("#rTransport");
  const { transportList } = useTransport();
  const { tourList } = useTour();
  const { register } = useFormContext();
  return (
    <div className="flex flex-col items-center gap-4 font-semibold h-full ">
      <div className="w-[95%] mt-2 rounded-lg bg-gray-100 ">
        <div className="border-b-2 border-gray-700 flex items-center place-items-center py-1 gap-4 ">
          <p className="text-sm ml-2 2xl:text-base">Servicios Transportes</p>
          <p id="oTransport" className="text-red-700 hidden ">
            Ha Escogido Omitir el Servicio!
          </p>
        </div>
        <div className="py-2 ml-4 text-sm w-min">
          <Dropdown label="Seleccionar">
            <Dropdown.Item>
              <button
                className="py-1 px-2"
                type="button"
                onClick={(e) => {
                  if (divTransport.is(":visible")) {
                    divTransport.slideUp();
                    btnTransport.removeClass("hidden");
                    radionBtnTransport.prop("checked" , false)
                    radionBtnTransport.removeAttr("checked");
                  } else if (divTransport.is(":hidden")) {
                    radionBtnTransport.prop("checked" , true)
                    divTransport.slideDown();
                    btnTransport.addClass("hidden");
                  }

                  if (oTransport.is(":visible")) {
                    oTransport.addClass("hidden");
                  }
                }}
              >
                Agregar Servicio
              </button>{" "}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              {" "}
              <button
                id="omiTransport"
                type="button"
                className="w-full py-1 px-2"
                onClick={() => {
                  if (oTransport.is(":visible")) {
                    oTransport.addClass("hidden");
                  } else if (oTransport.is(":hidden")) {
                    oTransport.removeClass("hidden");
                  }
                }}
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
              <Table.HeadCell>Terminal</Table.HeadCell>
              <Table.HeadCell>Conductor</Table.HeadCell>
              <Table.HeadCell>Fecha</Table.HeadCell>
              <Table.HeadCell>Horario</Table.HeadCell>
              <Table.HeadCell>Precio</Table.HeadCell>
              <Table.HeadCell>Escoger</Table.HeadCell>
            </Table.Head>
            <TableBody>
              {transportList.map((tran) => (
                <TableRow key={tran.ID}>
                  <TableCell>{tran.TERMINAL}</TableCell>
                  <TableCell>{tran.CONDUCTOR}</TableCell>
                  <TableCell>{tran.FECHA}</TableCell>
                  <TableCell>{tran.HORARIO}</TableCell>
                  <TableCell>{tran.PRECIO}</TableCell>
                  <TableCell className="text-center">
                    <input
                      id="rTransport"
                      type="radio"
                      name="transport"
                      value={tran.ID}
                      {...register("transport")}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="w-[95%] mt-2 rounded-lg bg-gray-100 ">
        <div className="border-b-2 border-gray-700 flex items-center place-items-center py-1 gap-4 ">
          <p className="text-sm ml-2 2xl:text-base">Servicios Tour</p>
          <p id="otour" className="text-red-700 hidden ">
            Ha Escogido Omitir el Servicio!
          </p>
        </div>
        <div className="py-2 ml-4 text-sm w-min">
          <Dropdown label="Seleccionar">
            <Dropdown.Item>
              <button
                className="py-1 px-2"
                type="button"
                onClick={(e) => {
                  if (divTour.is(":visible")) {
                    divTour.slideUp();
                    btnTour.removeClass("hidden");
                  } else if (divTour.is(":hidden")) {
                    divTour.slideDown();
                    btnTour.addClass("hidden");
                  }

                  if (otour.is(":visible")) {
                    otour.addClass("hidden");
                  }
                }}
              >
                Agregar Servicio
              </button>{" "}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              {" "}
              <button
                id="omiTour"
                type="button"
                className="w-full py-1 px-2 "
                onClick={() => {
                  if (otour.is(":visible")) {
                    otour.addClass("hidden");
                  } else if (otour.is(":hidden")) {
                    otour.removeClass("hidden");
                  }
                }}
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
              <Table.HeadCell>Descripción</Table.HeadCell>
              <Table.HeadCell>Fecha</Table.HeadCell>
              <Table.HeadCell>Cupos</Table.HeadCell>
              <Table.HeadCell>Precio</Table.HeadCell>
              <Table.HeadCell>Acción</Table.HeadCell>
            </Table.Head>
            <TableBody>
              {tourList.map((tr) => (
                <TableRow key={tr.ID}>
                  <TableCell>{tr.DESCRIPCION}</TableCell>
                  <TableCell>{tr.FECHA}</TableCell>
                  <TableCell>{tr.CUPO}</TableCell>
                  <TableCell>{tr.PRECIO}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
