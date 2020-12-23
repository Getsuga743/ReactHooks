import React from 'react';
import { RenderSelect } from './RenderSelect';
import { FormCheck } from './FormCheck';
import {UseFormSimple} from '../../Hooks/UseFormSimple'
export const Main = () => {
  const [checkState, setcheckState] = UseFormSimple({});
  
  return (
    <>
      <h1 className="border-bottom mb-3">Proyecto de customs hooks</h1>
      <h2 className="border-bottom mb-3">
        Sientete libre de usar los botones para ver los ejemplos armados :)
      </h2>
      <div className="mb-3 mt-2 p-2">
        <RenderSelect>{checkState}</RenderSelect>
      </div>
      <FormCheck Handle={setcheckState}></FormCheck>
    </>
  );
};
