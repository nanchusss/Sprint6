import styled from "styled-components";
import Textos from "./Frases";
import Bienvenida from "../images/inicio.jpg";

//Bienvenida
export const Welcome = styled.div`
  h1 {
    font-size: 72px;
  }

  p {
    font-size: 32px;
  }

  button {
    min-width: 200px;
    min-height: 90px;
    border-radius: 10%;
    font-size: 22px;
    padding: 10px;
    background-color: #fff6;
    &:hover {
      background-color: #ff5;
      opacity: 0.8;
      box-shadow: 0px 7px 33px 24px rgba(248, 255, 177, 0.54);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: initial;
  font-size: larger;
  color: white;
  gap: 0.8rem;

  height: 750px;
  background-image: url(${Bienvenida});
  background-repeat: no-repeat;
  background-size: cover;
`;

//Botones del Header
export const Buttons = styled.div`
  button {
    border: 1px solid black;
    width: 50%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 12px;
    &:hover {
      background-color: #dcdcdc;
    }
  }

  display: flex;
  justify-content: center;
  margin: 5px;
`;
//Estilo de frases
export const Phrases = styled.div`
  padding: 15px;
  text-align: center;
  font-weight: 600;
  margin-top: 30px;
  margin: 25px;
  border-radius: 2rem;
  border: 1px solid black;
  opacity: 0.8;
  background-color: ${(props) => props.active};
  //acá setea el color según active.
  width: 95%;
  min-width: 90vw;
`;

//Estilo del Body. Background con imagen 0 del array.

export const BodyStyled = styled.body`
  background-image: url(${Textos[0].img});
  height: 1000px;
  width: 100%;
  background-size: cover;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
`;
