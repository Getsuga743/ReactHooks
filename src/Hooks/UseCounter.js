//Use para indicar q es un hook, un custom hook es una funcion comun
import { useState } from "react";

export const UseCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);
  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  return [state, increment, decrement];
};
