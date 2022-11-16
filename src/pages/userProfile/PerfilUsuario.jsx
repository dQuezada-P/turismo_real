import React from 'react';
import { InformacionPersonal } from './components/InformacionPersonal';
import { MisReservas } from './components/MisReservas';

export const PerfilUsuario = () => {

  return <div className="container px-3 my-10 mx-auto relative">
    <InformacionPersonal/>
    <MisReservas/>
  </div>
}
