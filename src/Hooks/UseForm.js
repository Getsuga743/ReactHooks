import { useState } from 'react';

export default (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange];
};
// tenemos dos opciones, declarar la funcion en el cuerpo del hook, o delcararla en el return
