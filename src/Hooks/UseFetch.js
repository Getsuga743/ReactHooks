/* eslint-disable import/prefer-default-export */
import { useState, useEffect, useRef } from 'react';

export default (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ loading: true, error: null, data: null });
  useEffect(() => () => {
    isMounted.current = false;
  }, []);

  useEffect(() => {
    // -2
    setState({ loading: true, error: null, data: null });
    fetch(url).then((resp) => resp.json()).then((data) => {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          data,
        });
      }
    });
  }, [url]);
  return state;
};
// se ejecuta cuando la url cambia, el useEffect está "escuchando los cambios de la url"
// -2 esto hace q se resetee el objeto del UseState, permitiendo q se vuelva a poner el
//  div de loading en el Componente
// -3 usamos el useRef para trackear el estado del componente una vez q este esta montado,
// utilizamos el cuerpo del useEffect este comienza en true,
// utilizamos un useEffect, configuramos para q solo use el cleanup y
// que se llama una unica vez, la primera vez , al montarse, el cleanup cambia el estado del useRef
// en el segundo useEffect, hacemos que haya un useState condicional teniendo como condicion,
// la referencia de UseRef.
// De esta manera nos aseguramos de q el componente esté montado,
// cuando el useFetch asincrono es llamado.
// Esto sirve para evitar perdidas de memoria y crasheos en nuestra app
