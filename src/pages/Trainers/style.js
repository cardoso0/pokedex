import styled from "styled-components";

export const Bg = styled.div`
  width: 95%;
  margin: 0 auto;
`

export const Trainers = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CallToAction = styled.section`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0.6rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  button {
    font-size: 1rem;
    background-color: #FF6464;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;
  }
`