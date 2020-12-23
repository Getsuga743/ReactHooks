/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  // const handleClick = () => {
  //   document.querySelector("#input").select();
  //   console.log(inputRef);
  // };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} className="form-control" id="input" placeholder="Su nombre" />
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
// El hooks useRef, se usa para mantener una referencia mutable
// podemos cambiar a lo q apunta el objeto ref, sin necesidad de re renderizar el componente
// se puede hacer referencia desde a elementos html, hasta cualquier tipo de dato
export default FocusScreen;
