/* eslint-disable react/prop-types */
import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
  console.log('me volví a generar');
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
