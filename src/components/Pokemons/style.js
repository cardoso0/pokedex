import styled from "styled-components";

export const Bg = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

export const Container = styled.div`

  .pokemon {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    border: 1px solid #D6D58E;
    border-radius: 10px;
    background-color: #D6D58E;
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

  .pokemons {
    display: grid;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .paginationBtns {
    height: 40px;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .paginationBtns a {
    padding: 15px;
    margin: 2px;
    border-radius: 5px;
    border: 1px solid red;
    cursor: pointer;
  }

  .paginationActive a {
    background-color: red;
  }
`
