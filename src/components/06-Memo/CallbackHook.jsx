import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((num) => {
    setCounter((c) => c + num);
  }, [setCounter]);
  //   useEffect(() =>{},[increment] )
  return (
    <div>
      <h1>
        UseCallback Hook:
        { counter }
      </h1>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
// el callbackHook tiene 2 casos de uso:
// cunado ocupamos mandar una funcion a un componente hijo
// el react memo no nos sirve porque la funcion incremente
// es una constante almacenada en memoria, la cual, al volver a renderizar el componente
// se vuelve a crear
// para evitar esto usamos el useCallback,
// tambien se usa con el use effect, para evitar q se dispare cuando se
// vuelva a generar la funcion
