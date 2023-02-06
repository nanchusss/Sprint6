import { Welcome } from "../StyledComponents";

const Bienvenida = (props) => {
  return (
    <Welcome>
      <h1> Benvingut!</h1>
      <p> Aquesta es la historia d'un heroi a l'espai sideral</p>
      <button onClick={props.iniciar}>Inicia!</button>
    </Welcome>
  );
};
export default Bienvenida;
