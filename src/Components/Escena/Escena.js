import { BodyStyled, Phrases } from "../StyledComponents";
import ArrayImgTxt from "../Frases";

const Escena = () => {
  return (
    <>
      <BodyStyled>
        <div>
          {ArrayImgTxt.map((element, index) => (
            <Phrases
              // Recordatorio: podemos asignar como key el index del elemento
              key={index}
            >
              {/* Acá (item.texto) estamos poniendo del Componente ArrayImgTxt (que está compuesto de objetos con propiedad texto e imagen) el valor de texto. Eso es lo que nos va a renderizar */}
              {console.log(
                "renderizado de frases y cambiando índice para pintar de rosa"
              )}
              {element.texto}
            </Phrases>
          ))}
        </div>
      </BodyStyled>
    </>
  );
};

export default Escena;
