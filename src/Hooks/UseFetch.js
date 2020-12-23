import {useState,useEffect} from 'react'

export const UseFetch = (url) => {
    const [state, setState] = useState({loading:true,error:null,data:null});
    useEffect(() => {
        //-2
        setState({loading:true,error:null,data:null})
        fetch(url).then(resp => resp.json()).then(data => {
            setState({
              loading: false,
              error: null,
              data
            });
        })
    }, [url])
    return state;
}
//se ejecuta cuando la url cambia, el useEffect está "escuchando los cambios de la url"
//-2 esto hace q se resetee el objeto del UseState, permitiendo q se vuelva a poner el div de loading en el Componente