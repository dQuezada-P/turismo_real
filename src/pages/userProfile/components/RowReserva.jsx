import React from 'react'
import { Table } from 'flowbite-react'
import { HiOutlineClipboard } from "react-icons/hi";

export const RowReserva = ({reserva}) => {
  console.log(reserva)
  return <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">      
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {reserva.DEPARTAMENTO.NOMBRE}
    </Table.Cell>
    <Table.Cell>
      {reserva.FECHA_INICIO}
    </Table.Cell>
    <Table.Cell className="lining-nums">
    {Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(reserva.TOTAL_RESERVA)}
    </Table.Cell>
    <Table.Cell>
      {reserva.ESTADO_DESC}
    </Table.Cell>
    <Table.Cell>
      { reserva.ESTADO == 0 ? (
          <button className="md:hover:bg-gray-200 rounded-md text-red-700 dark:text-orange-700">
            <div className="relative h-10 w-10  flex flex-col items-center justify-center select-none">
              <HiOutlineClipboard className="absolute" size={'2rem'}/>
              <div className="absolute font-bold text-lg ">x</div>
            </div>
          </button>
        ) : ""
      
      }
      
    </Table.Cell>
  </Table.Row>
}
