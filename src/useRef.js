import "./App.css";
import { useRef } from "react";

function App() {
  //1. Importamos useRef, luego declaramos una variable que tenga como valor useRef(null); luego en el div que vamos a renderizar vamos a identificar el elemento con ref={nombrevariable}. Así lo organizamos, luego en la función ya podemos trabajar con los valores como el aler inputRef.current.value.
  const inputRef = useRef(null);
  //2. Cuando pulsen el botón, el valor del div cuyo ref es resultRef, va a ser el valor de resultRef.el innerHTML es el que nos pinta en pantalla el resultado :)
  const resultRef = useRef(null);

  const makeThings = () => {
    alert(
      `${inputRef.current.value} es el valor en dólares que vas a convertir`
    );

    resultRef.current.innerHTML = inputRef.current.value * 2;
    inputRef.current.value = null;
  };
  return (
    <div className="App">
      <input type="number" ref={inputRef}></input>
      <button onClick={makeThings}>Hacer Cosas</button>
      <div ref={resultRef}></div>
    </div>
  );
}

export default App;
