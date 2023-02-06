import "./App.css";
import Escena from "./Components/Escena/Escena";
import Header from "./Components/Escena/Botones";

//En App está todo. Las props de los componentes por ejemplo, las funciones y todas las importaciones.
function App() {
  return (
    <>
      <Header> </Header>
      <Escena></Escena>;
    </>
  );
}

export default App;
