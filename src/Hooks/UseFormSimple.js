import { useState } from 'react';

export default (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const handleInputChange = ({ target }) => {
    setValues({
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange];
};
