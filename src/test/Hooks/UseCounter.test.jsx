/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react-hooks';
import UseCounter from '../../Hooks/UseCounter';

// eslint-disable-next-line no-undef
describe('pruebas en UseCounter', () => {
  // eslint-disable-next-line no-undef
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => UseCounter());
    expect(result.current[0]).toBe(10);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');
    expect(typeof result.current[3]).toBe('function');
  });
  test('debe de retornar el counter en 100', () => {
    const { result } = renderHook(() => UseCounter(100));
    expect(result.current[0]).toBe(100);
  });
  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => UseCounter(100));
    const increment = result.current[1];
    act(() => {
      // eslint-disable-next-line no-unused-expressions
      increment();
    });
    const counter = result.current[0];
    expect(counter).toBe(101);
  });
  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => UseCounter(100));
    const decrement = result.current[2];
    act(() => {
      // eslint-disable-next-line no-unused-expressions
      decrement();
    });
    const counter = result.current[0];
    expect(counter).toBe(99);
  });
  test('debe de reseterar counter', () => {
    const { result } = renderHook(() => UseCounter(100));
    const reset = result.current[3];
    const increment = result.current[1];
    act(() => {
      // eslint-disable-next-line no-unused-expressions
      increment();
      reset();
    });
    const counter = result.current[0];
    expect(counter).toBe(100);
  });
});
