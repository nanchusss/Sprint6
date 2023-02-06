import { Buttons } from "../StyledComponents";

//botones de anterior y siguiente
const Header = (props) => {
  // const Siguiente = () => {
  //   alert("Siguiente funcionando");
  // };
  // const Anterior = () => {
  //   alert("Anterior funcionando");
  // };
  const restar = -1;
  const sumar = 1;
  return (
    <>
      <Buttons>
        <button onClick={() => props.changeEscena(restar)}>Anterior</button>
        <button onClick={() => props.changeEscena(sumar)}>Seguent</button>
      </Buttons>
    </>
  );
};

export default Header;
