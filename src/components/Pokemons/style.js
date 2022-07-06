import styled from "styled-components";
import { colors } from "../colorsBgPokemons";

export const Bg = styled.div`
  max-width: 90%;
  margin: 0 auto;
  min-height: 100vh;
`

export const Pokemon = styled.div`
    width: 80%;
    margin: 1.5rem auto;
    border: 1px solid #D6D58E;
    border-radius: 10px;
    background-color: ${prop => colors[prop.pokemonType]};

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

export const Container = styled.div`
// border: 1px solid black;

  .pokemons {
    display: grid;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 95%;
      margin: 0 auto;
    }
  }

  .paginationBtns {
    height: 40px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    
    @media (min-width: 768px) {
      margin: 20px 0;
    }
  }

  .paginationBtns a {
    padding: 10px;
    margin: 3px;
    border-radius: 5px;
    border: 1px solid red;
    cursor: pointer;

    @media (min-width: 768px) {
      padding: 1rem;
      margin: 10px;
    }
  }

  .paginationActive a {
    background-color: red;
  }
`
