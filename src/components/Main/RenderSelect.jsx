import React from 'react';
import FormWithCustomForm from '../02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import CounterApp from '../01-Use-State/CounterApp';
import CounterWithCustomHook from '../01-Use-State/CounterWithCustomHook';
import SimpleForm from '../02-useEffect/SimpleForm';
import FocusScreen from '../04-Use-Ref/FocusScreen';
import RealExampleRef from '../04-Use-Ref/RealExampleRef';
import LayoutEffect from '../05-UseLayoutEffect/LayoutEffect';
import Memorize from '../06-Memo/Memorize';
import MemoHook from '../06-Memo/MemoHook';
import CallbackHook from '../06-Memo/CallbackHook';
import Padre from '../07-tarea-memo/Padre';

export default (props) => {
  const state = Object.values(props.children)[0];
  console.log(state - 1);
  if (state) {
    const components = [
      <CounterApp />,
      <CounterWithCustomHook />,
      <SimpleForm />,
      <FormWithCustomForm />,
      <MultipleCustomHooks />,
      <FocusScreen />,
      <RealExampleRef />,
      <LayoutEffect />,
      <Memorize />,
      <MemoHook />,
      <CallbackHook />,
      <Padre />,
    ];
    return components[state - 1];
  }
  return '';
};
