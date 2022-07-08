import styled from "styled-components";
import { colors } from "../../shared/colorsBgPokemons";

export const Bg = styled.div`

`

export const Pokemon = styled.div`
  width: 80%;
  margin: 1.5rem auto;
  border: 1px solid #D6D58E;
  border-radius: 10px;
  background-color: ${prop => colors[prop.pokemonType]};
  
  @media (min-width: 768px) {
    width: 25%
  }

  @media (min-width: 1024px) {
    width: 20%;
  }

  .pokemonName, .pokemonId, .pokemonType{
    text-align: center;
    font-weight: bold;
  }
  .pokemonName {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
  .pokemonType {
    padding-bottom: 0.5em;
  }
  img {
    width: 70%;
  }
  .img {
    text-align: center;
  }
`