import React, { useEffect, useState } from 'react'

const ClockFuncional = () => {
   
    const initialClock = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José",
      };
    
      const [clock, setClock] = useState(initialClock);
    
      useEffect(() => {
        const timeUp = setInterval(() => {
          setClock({ ...clock, fecha: new Date(), edad: clock.edad +1 });
        }, 1000);
        return () => {
          clearInterval(timeUp);
        };
      }, [clock]);

  return (
    <div>
         <h2>
         Hora Actual:
         {clock.fecha.toLocaleTimeString()}
         </h2>
         <h3>{clock.nombre} {clock.apellidos}</h3>
         <h1>Edad: {clock.edad}</h1>
    </div>
  )
}

export default ClockFuncional