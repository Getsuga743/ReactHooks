//Use para indicar q es un hook, un custom hook es una funcion comun
import { useState } from "react";

export const UseCounter = (initialState = 10) => {
  const [formState, setFormState] = useState(initialState);
  const increment = () => {
    setFormState(formState + 1);
  };
  const decrement = () => {
    setFormState(formState - 1);
  };
  const reset = () => {
    setFormState(initialState)
  }
  return [formState, increment, decrement, reset];
};
