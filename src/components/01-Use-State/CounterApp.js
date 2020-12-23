import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  //1
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  //2
  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr></hr>
      <button
        className="btn btn-primary center"
        //3
        onClick={() => {
       //4
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
//1-puedo destructurar el state.

//2-extraemos los estados que nos interesan, con la desestructuracion.

//3-este va a ser el nuevo estado. todas las propiedades anteriores
//que no esten definidas en este nuevo objeto se van a perder
//-4operador spread, extrae todas las propiedades,luego podemos "pisar"y redifiniar el state q queremos asignar manualmente

//5-pisamos las variables del operador state y re declaramos las variables q queremos q sean afectadas
//1-
//1-
//1-