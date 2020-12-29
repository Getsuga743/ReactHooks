/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';
import '../setupTest';

describe('Pruebas en <HookApp />', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
