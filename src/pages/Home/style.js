import styled from "styled-components";

export const Bg = styled.div`
  max-width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  .buscar {
    // border: 1px solid black;
    width: 10rem;
    text-align: center;
    padding: 0.5rem;
    color: white;
    background-color: red;
    margin: 1em auto;
  }
  a {
    text-decoration: none;
  }
`

export const Loading = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid red;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
  margin: 3em auto;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`

export const Container = styled.div`
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
    padding: 13px;
    margin: 2px;
    border-radius: 5px;
    border: 1px solid red;
    cursor: pointer;

    @media (min-width: 768px) {
      padding: 1rem;
      margin: 10px;
    }
  }

  .paginationActive a {
    border: 4px solid red;
  }
`
