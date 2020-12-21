import React, { useEffect, useState } from 'react';
//cuando el campo name es 123, se renderiza el componente "Message", este tiene un useEffect,(se activa cuando se monta),
//el useEffect, setea una evenListener q escucha la posicion del mouse
export const Message = () => {
   //seteamos un useState, para renderizar las coordenadas del mouse 
  const [coordsState, setcoordsState] = useState({ x: 0, y: 0 });
  const { x, y } = coordsState;
  const mouseMove = (e) => {
    const coords = { x: e.x, y: e.y };
    setcoordsState(coords);
  };
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    //esto para evitar q se dupliquen los efectos, sin esto, al cambiar y volver a la condicion de ejecucion(q se vuela a montar el componente), se generarian multiples listeners
    //escuchando la accion del mouse, de esta forma, solo queda el ultimo, q es producto del ultimo montaje del componente
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  return (
    <div>
      <h3>Nice</h3>
      <div>
        <span className="mr-5 fs-5">x:{x}</span>
        <span className="mr-5 fs-5">y:{y}</span>
      </div>
    </div>
  );
};
