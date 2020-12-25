/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useState, useMemo } from 'react';
import procesoPesado from '../../helpers/procesoPesado';
import UseCounter from '../../Hooks/UseCounter';

const MemoHook = () => {
  const [counter, increment] = UseCounter(15);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter:
        {' '}
        <small>{ counter }</small>
      </h3>
      <p>
        {' '}
        { memoProcesoPesado }
        {' '}
      </p>
      <div>
        <button
          className="btn btn-primary mr-2"
          type="button"
          onClick={increment}
        >
          incrementar
        </button>
        <button
          className="btn btn-primary mr-2"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {' '}
          Show/Hide:
          {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};
export default MemoHook;
// use memo recibe un callback, y un input, que es la dependencia, para trackear
// lo que nos interesa, de esta forma, el proceso se dispara si el counter cambia, pero no;
// si presionamos el toogle true false,
// esto es util para evitar re renderizaciones innecesarias
