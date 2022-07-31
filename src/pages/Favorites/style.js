import styled from 'styled-components'

export const Height = styled.div`
  min-height: 100vh;
  max-width: 90%;
  margin: 0 auto;
`
export const Pokemons = styled.div`
  padding-top: 2rem;
  display: grid;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 95%;
    margin: 0 auto;
  }
`