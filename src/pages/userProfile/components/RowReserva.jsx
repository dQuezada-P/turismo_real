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
          <button className=" rounded-md text-red-700 md:hover:bg-red-700 md:hover:text-gray-100 dark:text-yellow-300 dark:md:hover:bg-yellow-300 dark:md:hover:text-gray-800">
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
