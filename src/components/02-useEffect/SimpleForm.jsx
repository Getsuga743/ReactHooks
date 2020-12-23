/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Message from './Message';

export default () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  // desestructuramos para q sea mas entendible
  const { name, email } = formState;
  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log('componente montado');
    return () => {
      console.log('componente desmontado');
    };
  }, []);
  //     useEffect(() => {
  //       console.log("formState siendo escuchando,y cambiando");
  //     }, [formState]);
  //   useEffect(() => {
  //     console.log('name, cambio');
  //   }, [name]);
  //   useEffect(() => {
  //     console.log('email siendo escuchando,y cambiando');
  //   }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  // asi como esta configurado el efectoto no importa que cambie se vuelve a ejecutar
  //   useEffect(() => {
  //     console.log('hey');
  //   });
  // al incluir el arreglo de dependecias el effect solo se dispara una vez
  return (
    <div>
      <h1>Simple Form - use Effect</h1>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control mt-5"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name === '123') && <Message />}
    </div>
  );
};
