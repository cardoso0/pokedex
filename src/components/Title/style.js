import styled from "styled-components";

export const Title = styled.section`
  max-width: 90%;
  margin: 3rem auto 0;
  h1, h2 {
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2em;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
    }
    @media (min-width: 1024px) {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`