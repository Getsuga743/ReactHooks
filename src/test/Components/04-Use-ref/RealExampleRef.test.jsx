/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-Use-Ref/RealExampleRef';
import '../../../setupTest';

describe('Pruebas en <RealExampleRef />', () => {
  const wrapper = shallow(<RealExampleRef />);
  test('debe mostrarse correctamente', () => {
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar el componente <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });
});
