import styled from "styled-components";

export const Title = styled.section`
  max-width: 90%;
  margin: 2rem auto 0;
  h1, h2 {
    margin: 0 auto 0.6rem;
    font-size: calc(1.2rem + ${(props) => props.theme.textSize});
    font-weight: 500;
    line-height: 1.2em;
    text-align: center;

    @media (min-width: 768px) {
      font-size: calc(1.4rem + ${(props) => props.theme.textSize});
      text-align: center;
    }
    @media (min-width: 1024px) {
      text-align: center;
      font-size: calc(1.5rem + ${(props) => props.theme.textSize});
      font-weight: 600;
    }
  }
`