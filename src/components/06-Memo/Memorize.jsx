import React, { useState } from 'react';
import UseCounter from '../../Hooks/UseCounter';
import Small from './Small';

const Memorize = () => {
  const [counter, increment] = UseCounter(15);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Memorize</h1>
      <h1>
        Counter:
        {' '}
        <Small value={counter} />
      </h1>
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
export default Memorize;
