/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../../../components/09 useContext/HomePage';
import UserContext from '../../../components/09 useContext/UserContext';
import '../../../setupTest';

describe('pruebas en <HomePage />', () => {
  const user = {
    name: 'Fernando',
    email: 'fernando@gmail.com',
  };
  // shallow hace una renderizacion unicamente del componente q le especifico,
  // home page nose muestra
  // para eso usamos mount
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomePage />
    </UserContext.Provider>,
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
