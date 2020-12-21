//Use para indicar q es un hook, un custom hook es una funcion comun
import { useState } from "react";

export const UseCounter = (initialState = 10) => {
  const [formState, setFormState] = useState(initialState);
  const increment = () => {
    setState(formstate + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  const reset = () => {
    setState(initialState)
  }
  return [state, increment, decrement, reset];
};
