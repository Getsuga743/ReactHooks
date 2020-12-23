import React from 'react';
import { UseFetch } from '../../Hooks/UseFetch';
import { UseCounter } from '../../Hooks/UseCounter';

export default () => {
  const [countState, increment] = UseCounter(1);
  const { loading, error, data } = UseFetch(
    `https://www.breakingbadapi.com/api/quotes/${countState}`,
  );
  const { author, quote } = !!data && data[0];
  if (error) {
    console.log(error);
  }
  // -2
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {
        // -1
        loading ? (
          <div className="alert alert-info textInfo">Loading...</div>
        ) : (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
            <button type="button" className="btn btn-primary mt-5" onClick={increment}>
              Next Quote
            </button>
          </blockquote>
        )
      }
    </div>
  );
};
// -1 utilizamos el operador ternario para hacer un renderizado condicional
// -2 si la data es null al negarla, pasa a un valor booleano de true, y al volver a complementarla
//  queda devuelta en false, pero ya podemos usarlo xq no es null
//  si data es true, entonces se muestra data[0]
//  mirar customHook useFetch
