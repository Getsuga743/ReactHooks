import React from 'react';
import FormWithCustomForm from '../02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import CounterApp from '../01-Use-State/CounterApp';
import CounterWithCustomHook from '../01-Use-State/CounterWithCustomHook';
import SimpleForm from '../02-useEffect/SimpleForm';
import FocusScreen from '../04-Use-Ref/FocusScreen';
import RealExampleRef from '../04-Use-Ref/RealExampleRef';
import LayoutEffect from '../05-UseLayoutEffect/LayoutEffect';

export default (props) => {
  const state = Object.values(props.children)[0] || '';
  switch (state) {
    case '1':
      return <CounterApp />;
    case '2':
      return <CounterWithCustomHook />;
    case '3':
      return <SimpleForm />;
    case '4':
      return <FormWithCustomForm />;
    case '5':
      return <MultipleCustomHooks />;
    case '6':
      return <FocusScreen />;
    case '7':
      return <RealExampleRef />;
    case '8':
      return <LayoutEffect />;
    default:
      return '';
  }
};
