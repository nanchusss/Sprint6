import { useState, useEffect } from "react";

function App() {
  const [a, setState] = useState(8);

  const hacerCosas = () => {
    alert("si");
    setState(16);
  };
  //el cambio de estado se usa para mostrar en pantalla el valor cambiado.
  useEffect(() => {
    console.log("cambió el estado de a");
  }, [a]);

  return (
    <>
      <button onClick={() => hacerCosas()}>Dale Click</button>
      <div>{a}</div>;
    </>
  );
}

export default App;
