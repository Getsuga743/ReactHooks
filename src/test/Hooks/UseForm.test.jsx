/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { renderHook, act } from '@testing-library/react-hooks';
import UseForm from '../../Hooks/UseForm';

describe('pruebas en UseForm', () => {
  const initialForm = {
    name: 'fernando',
    email: 'fernando@gmail.com',
  };
  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => UseForm());
    expect(typeof result.current[0]).toBe('object');
    expect(Object.keys(result.current[0]).length).toBe(0);
    expect(typeof result.current[1]).toBe('function');
  });
  test('debe de cambiar el valor del formulario(cambiar name)', () => {
    const { result } = renderHook(() => UseForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      });
    });
    const formValues = result.current[0];
    expect(formValues).toEqual({ ...initialForm, name: 'Melissa' });
  });
  test('debe de resetear el formulario', () => {
    const { result } = renderHook(() => UseForm(initialForm));
    const [, handleInputChange, resetForm] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      });
      resetForm();
    });
    const formValues = result.current[0];
    expect(formValues).toEqual(initialForm);
  });
});
