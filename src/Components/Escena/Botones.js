import { Buttons } from "../StyledComponents";

//botones de anterior y siguiente
const Header = () => {
  const Siguiente = () => {
    alert("Siguiente funcionando");
  };
  const Anterior = () => {
    alert("Anterior funcionando");
  };
  return (
    <>
      <Buttons>
        <button onClick={() => Siguiente()}>Seguent</button>
        <button onClick={() => Anterior()}>Anterior</button>
      </Buttons>
    </>
  );
};

export default Header;
