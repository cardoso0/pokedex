import styled from 'styled-components'

export const Height = styled.div`
  min-height: 100vh;
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
  }
`
export const Pokemons = styled.div`
  display: grid;
  height: 100%;

  @media (min-width: 768px) {
    padding-top: 3rem;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 95%;
    margin: 0 auto;
    .pokemonBg {
      width: 65%;
    }
  }
`