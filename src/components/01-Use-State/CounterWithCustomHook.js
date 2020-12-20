import React from "react";
import { UseCounter } from "../../Hooks/UseCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const [state, increment, decrement] = UseCounter(15);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <button
        onClick={() => {
          increment();
        }}
        className="btn btn-primary"
      >
        +1
      </button>
      <button
        onClick={() => {
          decrement();
        }}
        className="btn btn-primary"
      >
        -1
      </button>
    </>
  );
};
