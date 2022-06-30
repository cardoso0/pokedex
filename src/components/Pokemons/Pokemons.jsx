import * as S from './style'

export const Pokemons = (props) => {

  const { pokemons, loading } = props

  return (
    <S.Bg>
      {loading ? (
        <div>Carregando...Aguarde</div>
      ) : (
        <div>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                Nome: {pokemon.name}
                <div>Habilidade: {pokemon.abilities[0].ability.name}</div>
                <div>Experiencia Base: {pokemon.base_experience}</div>
                <div>Altura: {pokemon.height}</div>
                <div>Peso: {pokemon.weight}</div>
                <div>Tipo: {pokemon.types[0].type.name}</div>
                <img src={pokemon.sprites.front_default} alt="imagem do pokemon" />
              </div>
            )
          })}
        </div>
      )}
    </S.Bg>
  )
}