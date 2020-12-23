import React from 'react';
import UseCounter from '../../Hooks/UseCounter';
import './counter.css';

export default () => {
  const [state, increment, decrement, reset] = UseCounter(15);
  return (
    <>
      <h1>
        Counter with Hook:
        {state}
      </h1>
      <button
        type="button"
        onClick={() => {
          increment();
        }}
        className="btn btn-primary m-2"
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          decrement();
        }}
        className="btn btn-primary m-2"
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-secondary m-2"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </>
  );
};
