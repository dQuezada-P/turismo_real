import React from 'react';
import { Card } from 'flowbite-react';
import { useAuth } from '../../../context/hooks/useAuth';

export const InformacionPersonal = () => {
  const { user } = useAuth();

  return <Card className="mb-3">
    <h5 className="ml-4 mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      Información Personal
    </h5>
  
    <div class="text-gray-700 dark:text-white">
      <div class="grid md:grid-cols-2 text-sm">
        <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Rut</div>
              <div class="px-4 py-2">{user.RUT}</div>
          </div>
          <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Nombre</div>
              <div class="px-4 py-2">{user.NOMBRE}</div>
          </div>
          <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Apellido</div>
              <div class="px-4 py-2">{user.APELLIDO}</div>
          </div>
          <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Teléfono de contacto</div>
              <div class="px-4 py-2">{user.TELEFONO}</div>
          </div>
          <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Domicilio</div>
              <div class="px-4 py-2">{user.DIRECCION}</div>
          </div>
          <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Email</div>
              <div class="px-4 py-2">{user.CORREO}</div>
          </div>
      </div>
    </div>
    

    {/* <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
      
      {user.NOMBRE} {user.APELLIDO}
    </p> */}
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    </div>
  </Card>
}
