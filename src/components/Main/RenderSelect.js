import React from 'react';
import { FormWithCustomForm } from '../02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import { CounterApp } from './../01-Use-State/CounterApp';
import { CounterWithCustomHook } from './../01-Use-State/CounterWithCustomHook';
import { SimpleForm } from './../02-useEffect/SimpleForm';

export const RenderSelect = (props) => {
  let state = Object.values(props.children)[0] || '';
  switch (state) {
    case '1':
      return <CounterApp></CounterApp>;
    case '2':
      return <CounterWithCustomHook />;
    case '3':
      return <SimpleForm />;
    case '4':
      return <FormWithCustomForm />;
    case '5':
      return <MultipleCustomHooks />;
    default:
      return '';
  }
};
