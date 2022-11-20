import React, { useState, useEffect } from 'react'; 
import { Card, Table } from 'flowbite-react';
import { useAuth } from '../../../context/hooks/useAuth';
import { getUserReservations } from '../../../services/reservation/ApiRequestReservation';

import { LoadingScreen } from '../../../components/loadingScreen/LoadingScreen';
import { useLoading } from '../../../context/hooks/useLoading';
import { RowReserva } from './RowReserva';

export const MisReservas = () => {
  const { user } = useAuth();
  const [reservations, setReservations] = useState(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    Promise.all([
      getUserReservations({id_user:user.ID})
    ]).then(([reservationList]) => {
      setReservations(reservationList);
      console.log(reservationList);
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    });
  }, [])
  
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
            Total Reserva
          </Table.HeadCell>
          <Table.HeadCell>
            Estado
          </Table.HeadCell>
          <Table.HeadCell>
            Cancelar<br/> Reserva
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          { reservations 
            ? reservations.map( reservation => {  
              return <RowReserva reserva={reservation} />
            })
            : ('')
          }
          
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
