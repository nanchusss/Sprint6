import Escena from "./Components/Escena/Escena";
import Header from "./Components/Escena/Botones";
import { useState } from "react";
import Textos from "./Components/Frases";

//En App está todo. Las props de los componentes por ejemplo, las funciones y todas las importaciones.
function App() {
  const [numEscena, seteoNumEscena] = useState(0);
  //a es pasado por botón (puede ser 1 o -1)

  const changeEscena = (a) => {
    seteoNumEscena((indice) => {
      if (indice + a < 0) {
        console.log("Retrocede");
        return indice;
      }
      if (indice + a >= Textos.length) {
        indice = 0;
        console.log("entra el segundo if porque terminó el recorrido");
        return indice;
      } else {
        console.log("Solo adelanta");
        return indice + a;
      }
    });
  };
  return (
    <>
      <Header changeEscena={changeEscena}> </Header>
      <Escena numEscena={numEscena}></Escena>;
    </>
  );
}

export default App;
