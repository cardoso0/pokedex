import styled from "styled-components";

export const Bg = styled.div`
  max-width: 90%;
  margin: 0 auto;
  // height: 500px;
`

export const Container = styled.div`

  .pokemons {
    display: flex;
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
