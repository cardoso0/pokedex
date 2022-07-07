import styled from "styled-components";
import { colors } from "../../shared/colorsBgPokemons";

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

  .pokemonName {
    text-align: center;
  }
  .pokemonId {
    text-align: center;
  }
  .pokemonType {
    text-align: center;
  }
  img {
    width: 70%;
  }
  .img {
    text-align: center;
    // border: 1px solid black;
  }
`

export const Bg = styled.div`
  // .pokemon {
  //   width: 80%;
  //   margin: 1.5rem auto;
  //   border: 1px solid #D6D58E;
  //   border-radius: 10px;
  //   background-color: ${(props) => props.pokemonType ? 'yellow' : 'blue'};

  //   @media (max-width: 768px) {
  //     width: 30%
  //   }

  //   .pokemonName {
  //     text-align: center;
  //   }
  //   .pokemonId {
  //     text-align: center;
  //   }
  //   .pokemonType {
  //     text-align: center;
  //   }
  //   img {
  //     width: 70%;
  //   }
  //   .img {
  //     text-align: center;
  //     // border: 1px solid black;
  //   }
  // }
`