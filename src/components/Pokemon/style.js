import styled from "styled-components";
import { colors } from "../../shared/colorsBgPokemons";

export const Pokemon = styled.div`
  width: 80%;
  margin: 1.5rem auto;
  border: 1px solid #D6D58E;
  border-radius: 10px;
  background-color: ${prop => colors[prop.pokemonType]};
  text-align: center;
  font-weight: bold;
  
  .pokemonId {
    margin: auto 0;
    padding: 0.5em;
  }

  .pokemonName {
    padding: 0.5em 0 0.5em 0;
  }
  .pokemonType {
    padding-bottom: 0.5em;
  }
  img {
    width: 70%;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: ${prop => prop.medium ? '25%' : ''}
  }
  
  @media (min-width: 1024px) {
    width: ${prop => prop.large}
  }
`

export const BgName = styled.div`
  display: flex;
  justify-content: space-around;

  .heart {
    margin: auto 0;
    padding: 0.5em;
    cursor: pointer;
  }
`
