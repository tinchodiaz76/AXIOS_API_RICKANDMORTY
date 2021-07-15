import {API} from "../API";
import { useEffect, useState,useCallback } from "react";


export const  useFetch= (endpoint) => {
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(false);
    const [data, setData]= useState({});

    const getData = useCallback (async () =>{
        try{
            const {data} =await API.get(`${endpoint}`); //Darle bola solo al response
            setData(data);
            setLoading(false);
        }
    catch (e){
        setError(true);
        setLoading(false);
        console.log(e);
    };
}, [endpoint] );                      //useCallback memoriza la funcion para que no se renderice, salvo que cambie el ENDPOINT

 
useEffect(() => {
    getData();
},[endpoint, getData]);      //Cuando cambia el ENDPOINT se ejecuta getdata

return [data, loading, error];

};


