/* eslint-disable no-console */
import React, { useEffect } from 'react';
import UseForm from '../../Hooks/UseForm';

export default () => {
  const [formState, handleInputChange] = UseForm({ name: '', email: '', password: '' });
  // desestructuramos para q sea mas entendible
  const { name, email, password } = formState;

  useEffect(() => {
    console.log('email cambio');
  }, [email]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div>
      <h1>Form With Custom Hook - use Effect</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Tu email"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control mb-2"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          className="form-control"
          placeholder="*****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};
// Utilizamos un custom hook para que el componente quede mas legible.
// los custom hooks tienen un poder enorme para centralizar y reutilizar la logica
