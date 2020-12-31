/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { mount } from 'enzyme';
import LoginPage from '../../../components/09 useContext/LoginPage';
import UserContext from '../../../components/09 useContext/UserContext';
import '../../../setupTest';

describe('Pruebas en <LoginPage />', () => {
  const setUser = jest.fn();
  const wrapper = mount(
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <UserContext.Provider value={{ setUser }}>
      // eslint-disable-next-line react/jsx-no-undef
      <LoginPage />
    </UserContext.Provider>,
  );
  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de ejecutar el setUser con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'fernando',
    });
  });
});
