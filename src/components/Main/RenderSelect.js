
import React from 'react';

import { CounterApp } from './../01-Use-State/CounterApp';
import { CounterWithCustomHook } from './../01-Use-State/CounterWithCustomHook';
import { SimpleForm } from './../02-useEffect/SimpleForm';

export const RenderSelect = (props) => {
  let state = props.children || ""
  switch (state) {
    case '1':
      return <CounterApp></CounterApp>;
    case '2':
      return <CounterWithCustomHook></CounterWithCustomHook>;
    case '3':
      return <SimpleForm/>
    default:
      return  null
  }
}

