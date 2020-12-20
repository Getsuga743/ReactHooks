import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  //puedo destructurar el state
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  //extremos los estados que nos interesan, con la desestructuracion
  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr></hr>
      <button
        className="btn btn-primary center"
        //este va a ser el nuevo etado. todas las propiedades anteriores
        //que no esten definidas en este nuevo objeto se van a perder
        //operador spread, extrae todas las propiedades,luego podemos "pisar"y redifiniar el state q queremos asignar manualmente
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
