/* eslint-disable no-console */
import React, { useLayoutEffect, useRef, useState } from 'react';
import UseFetch from '../../Hooks/UseFetch';
import UseCounter from '../../Hooks/UseCounter';
import './Layout.css';

export default () => {
  const ptagRef = useRef();
  const [boundary, setBoundary] = useState({});

  const [countState, increment] = UseCounter(1);
  const { data } = UseFetch(
    `https://www.breakingbadapi.com/api/quotes/${countState}`,
  );
  const { quote } = !!data && data[0];
  useLayoutEffect(() => {
    console.log(boundary, 'antes');
    return () => {
      setBoundary(ptagRef.current.getBoundingClientRect());
    };
  }, [quote]);
  // -2
  return (
    <div className="layout-effect">
      <h1>Layout Effect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={ptagRef} className="mb-0 border-blockquote">
          {quote}
        </p>
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={increment}
        >
          Next Quote
        </button>
      </blockquote>
      <div>
        {`width: ${boundary.width} px`}
      </div>
    </div>
  );
};
// el objetivo de usar el userLayout es hacer cosas una vez q la interfaz se carga,
// ejemplo sacar mediciones de los elementos de la pantalla
