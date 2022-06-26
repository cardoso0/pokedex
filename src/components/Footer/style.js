import styled from "styled-components";

export const Bg = styled.div`
  background-color: #ff0400;
`

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  border: 1px solid black;

  @media (min-width: 768px) {
    max-width: 80%;
  }
`