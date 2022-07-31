import styled from 'styled-components'
import { colors } from '../../shared'

export const Height = styled.div`
  min-height: 100vh;
`
export const Card = styled.section`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  width: 85%;
  margin: 0 auto;
  padding: 1.5em 0 1.5em 0;
  display: flex;
  flex-direction: column;

  .pokemonBg {
    width: 80%;
    margin: 0 auto;
    order: 0;
  }

  @media (min-width: 768px) {
    width: 35%;
  }

  @media (min-width: 1024px) {
    width: 22%;
  }
`

export const Details = styled.ul`
  border-radius: 10px;
  background: ${prop => colors[prop.pokemonType]};
  padding: 1em;
  width: 70%;
  margin: 0 auto;
  margin-top: 1em;
  order: 1;

  span {
    font-weight: bold;
  }
`