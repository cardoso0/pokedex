import styled from "styled-components";

export const Bg = styled.div`
  background-color: #ff0400;
`

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;
  padding: 0.5em 0 0.5em 0;
  border: 1px solid black;

  .pokebola {
    display: none;
  }
  .logo {
    display: flex;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    max-width: 80%;
    display: flex;
    justify-content: space-between;

    .pokebola {
      display: flex;
      width: 90px;
    }
    .logo {
      margin: auto 0;
      height: 70px;
    }
  }
`