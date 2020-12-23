// Use para indicar q es un hook, un custom hook es una funcion comun
import { useState } from 'react';

export default (initialState = 10) => {
  const [countState, setFormState] = useState(initialState);
  const increment = () => {
    setFormState(countState + 1);
  };
  const decrement = () => {
    setFormState(countState - 1);
  };
  const reset = () => {
    setFormState(initialState);
  };
  return [countState, increment, decrement, reset];
};
