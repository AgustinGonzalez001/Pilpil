import { useState } from 'react';
import Reservar from './Reservacion.jsx';
import {createContext, useContext } from 'react';
import React from 'react';


const CalendarioReserva = () => {
  const [fecha, setFecha] = useState(new Date());
  const diaSeleccionado = new Date();

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const obtenerDiasMes = () => {
    const dias = [];
    const primerDia = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
    const ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
    const hoy = new Date();

    const diaSemana = primerDia.getDay();
    for (let i = 0; i < diaSemana; i++){
      dias.push({dia:null, deshabilitado: true});
    };
    for (let i = 1; i <= ultimoDia.getDate(); i++) {
      const dia = new Date(fecha.getFullYear(), fecha.getMonth(), i);
      dias.push({
        dia: i,
        deshabilitado: dia <= hoy,
      });
    }

    return dias;
  };

  const seleccionarDia = (dia) => {
    if (!dia.deshabilitado) {
      diaSeleccionado.setDate(dia)
      setFecha(diaSeleccionado)
    }
  };

  const cambiarMes = (direccion) => {
    const nuevaFecha = new Date(fecha);
    if (direccion === 'anterior') {
      nuevaFecha.setMonth(nuevaFecha.getMonth() - 1);
    } else {
      nuevaFecha.setMonth(nuevaFecha.getMonth() + 1);
    }
    setFecha(nuevaFecha);
  };

  return (
    <div className='flex justify-around items-center'>
      <div className="h-105 w-100 p-3 bg-[#fff] flex flex-col text-center text-black gap-2 border-4 border-double border-black rounded-lg">
        <div className="flex justify-around mt-5 ">
          <button className='bg-blue-500 ' onClick={() => cambiarMes('anterior')}>{'<<'}</button>
          <h2 className='text-xl'>{meses[fecha.getMonth()]} {fecha.getFullYear()}</h2>
          <button className='bg-blue-500 ' onClick={() => cambiarMes('siguiente')}>{'>>'}</button>
        </div>
        <div className='flex gap-7'>
          {diasSemana.map((dia, index) => (
            <div key={index}>{dia}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 ">
          {obtenerDiasMes().map((dia, index) => (
            <div className='h-10 w-10 text-center flex items-center justify-center rounded-sm cursor-pointer border-1 border-solid border-black rounded-lg'
            key={index}
            style={{
              backgroundColor: dia.dia === diaSeleccionado ? 'green' : dia.deshabilitado ? 'gray' : '',
              cursor: dia.deshabilitado || dia.dia === null? 'not-allowed' : 'pointer',
              visibility: dia.dia === null ? 'hidden':'visible'
            }}
            onClick={() => seleccionarDia(dia.dia)}
            >
              {dia.dia}
            </div>
          ))}
        </div>
      </div>
      <Reservar value={fecha}/>
    </div>

  );
};

export default CalendarioReserva;

// fecha={diaSeleccionado.toLocaleString()}