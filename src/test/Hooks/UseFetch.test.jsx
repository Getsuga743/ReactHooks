/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { renderHook, act } from '@testing-library/react-hooks';
import UseFetch from '../../Hooks/UseFetch';

describe('Pruebas en useFetch', () => {
  test('debe de retornar la informacion por defecto', () => {
    const { result } = renderHook(() => UseFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
  // hacemos nuestro callback una funcion asincrona
  test('debe de tener la info deseada, loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => UseFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    const [id] = data;
    const { quote_id: quote } = id;
    expect(quote).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
});
