import { useEffect, useState } from "react";
import { useContext } from 'react';
import { HoraContext } from '../contex/HoraContex';

export const useHora = () => useContext(HoraContext);


export function useHoraActual() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();
      const horaFormateada = ahora.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const fechaFormateada = ahora.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
      });
      setHora(`${horaFormateada} - ${fechaFormateada}`);
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return hora;
}
