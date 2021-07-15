import logo from './logo.svg';
import './App.css';
import {useFetch} from "./hooks/useFetch";
import {useState} from "react";
import Personajes from "./Components/Personajes";
import Search from "./Components/Search";

function App() {
  const [endpoint, setEndpoint]= useState("character");
  
  console.log("El endpoint es " + endpoint);

  const [data, loading, error]= useFetch(endpoint);

  const FindSearch =(personaje) =>{
    setEndpoint(`character?name=${personaje}`);
  }
  
  //Si cambia el contador no se renderiza nada.
  //Si cambia el endpoint, se renderiza el getdata. Si no cambio el endpoint no, porque tiene un useCallback.



  console.log(data);
  //data me devuelve result e info (es para la paguinacion)
  //Lo que hago en la linea de abajoi es desestructurar data
  
  const { results: personaje, info} =data;

  return (
    <div className="App">
        <Search FindSearch={FindSearch} />
        <Personajes personajes= {personaje} />
    </div>  
  );
}

export default App;
