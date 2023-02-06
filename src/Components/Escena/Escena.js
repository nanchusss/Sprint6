import { Phrases } from "../StyledComponents";
import Textos from "../Frases";

const Escena = (props) => {
  return (
    <>
      <div>
        {Textos.map((element, index) => (
          <Phrases
            // Recordatorio: podemos asignar como key el index del elemento
            key={index}
            active={
              props.numEscena === Textos.indexOf(element) ? "pink" : "white"
            }
          >
            {/* Acá (item.texto) estamos poniendo del Componente Textos (que está compuesto de objetos con propiedad texto e imagen) el valor de texto. Eso es lo que nos va a renderizar */}
            {console.log(
              "renderizado de frases y cambiando índice para pintar de rosa"
            )}
            {element.texto}
          </Phrases>
        ))}
      </div>
    </>
  );
};

export default Escena;
