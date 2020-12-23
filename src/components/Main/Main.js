import React, { useState } from 'react';
import { RenderSelect } from './RenderSelect';
import { FormCheck } from './FormCheck';
export const Main = () => {
  const [checkState, setcheckState] = useState();
  const handleInputChange = ({ target }) => {
    setcheckState(target.value);
  };
  return (
    <>
      <h1 className="mb-2">Proyecto de customs hooks</h1>
      <h2 >Sientete libre de usar los botones para ver los ejemplos armados :)</h2>
      <div className="container mb-3 mt-2 border">
        <RenderSelect>{checkState}</RenderSelect>
      </div>
        <FormCheck Handle={handleInputChange}></FormCheck>
    </>
  );
};
