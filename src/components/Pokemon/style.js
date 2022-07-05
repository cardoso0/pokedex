import styled from "styled-components";

export const Bg = styled.div`
  .pokemon {
    width: 80%;
    margin: 1.5rem auto;
    border: 1px solid #D6D58E;
    border-radius: 10px;
    background-color: #D6D58E;

    @media (max-width: 768px) {
      width: 30%
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
  }
`