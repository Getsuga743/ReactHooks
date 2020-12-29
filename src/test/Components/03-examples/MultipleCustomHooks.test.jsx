/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import '../../../setupTest';
import UseFetch from '../../../Hooks/UseFetch';
// de esta forma le digo aq jest q ya se q lo que venga de useFetch es correcto y no me importa
jest.mock('../../../Hooks/UseFetch');

describe('pruebas en 03-examples, MultipleCustomHooks', () => {
  test('debe de mostrarse correctamente', () => {
    UseFetch.mockReturnValue({ data: null, loading: true, error: null });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  // aca se prueba q nuestro html del componente tenga lo mismo
  // que el resultado de nuestro mock del UseFetch
  test('debe de mostrar la informacion', () => {
    UseFetch.mockReturnValue({
      data: [{ author: 'fernando', quote: 'hola mundo' }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    console.log(wrapper.html());
    // nos aseguramos de q no exista la clase alert(...loading), osea q la informacion
    // se haya cargado, y que esta coincida con lo q le mandamos
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('hola mundo');
  });
});
