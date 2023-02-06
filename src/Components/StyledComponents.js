import styled from "styled-components";
import ArrayImgTxt from "./Frases";

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
  background-color: white;
  //acá setea el color según active.
  width: 95%;
  min-width: 90vw;
`;

//Estilo del Body. Background con imagen 0 del array.

export const BodyStyled = styled.body`
  background-image: url(${ArrayImgTxt[0].img});
  height: 1000px;
  width: 100%;
  background-size: cover;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
`;
