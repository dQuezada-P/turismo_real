import React from 'react';
import { Card, Table } from 'flowbite-react';
import { useAuth } from '../../../context/hooks/useAuth';

export const MisReservas = () => {
  const { user } = useAuth();

  return <Card className="mb-3">
    <h5 className="ml-4 mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      Historial de reservas
    </h5>
  
    <div class="text-gray-700 dark:text-white">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            Departamento
          </Table.HeadCell>
          <Table.HeadCell>
            Fecha ingreso
          </Table.HeadCell>
          <Table.HeadCell>
            Valor Arriendo
          </Table.HeadCell>
          <Table.HeadCell>
            Estado
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Acciones
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
              Sliver
            </Table.Cell>
            <Table.Cell>
              Laptop
            </Table.Cell>
            <Table.Cell>
              $2999
            </Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          
        </Table.Body>
      </Table>
    </div>
    

    {/* <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
      
      {user.NOMBRE} {user.APELLIDO}
    </p> */}
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    </div>
  </Card>
}
