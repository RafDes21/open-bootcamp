import React, { useState } from "react";
import styled from "styled-components";
// Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.

// Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.

// Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

const Eventos = () => {
  const [fondo, setFondo] = useState('rgb(0, 0, 0)');

  const [fondoFinal, setFondoFinal] = useState();
  const [stop, setStop] = useState(true);

  const aleatorio = () => {
    if (stop) {
      let random = Math.round(Math.random() * 255);
      let random2 = Math.round(Math.random() * 255);
      let random3 = Math.round(Math.random() * 255);
      let background = `rgb(${random}, ${random2}, ${random3})`;
      setFondo(background);
      setFondoFinal(background);
    } else {
      setFondoFinal(fondo);
    }
  };

  const doubleClick = () => {
    alert("doble click");
    setFondoFinal(fondo);
  };

  const salida = () => {
    // alert("saliod el mosue");
    setStop(false);
  };

  return (
    <Contenedor
      onMouseOut={salida}
      onDoubleClick={doubleClick}
      onMouseOver={aleatorio}
    >
      <div
        style={{
          backgroundColor: stop ? fondo : fondoFinal,
          width: "200px",
          height: "200px",
          margin: "50px auto",
          borderRadius: "100px",
        }}
      ></div>
    </Contenedor>
  );
};

export default Eventos;

const Contenedor = styled.div`
  height: 300px;
  width: 300px;
  margin: auto auto;
  margin-top: 300px;
  border: 1px solid green;
`;
