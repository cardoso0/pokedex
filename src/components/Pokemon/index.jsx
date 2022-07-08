import * as S from './style'

export const Pokemon = props => {

  const { pokemon } = props
  const firstLetterUpperCase = (pokemons) => pokemons.name[0].toUpperCase() + pokemons.name.substring(1)
  const pokemonType = pokemon.types[0].type.name
  return (
    <S.Bg>
      {pokemon && (
        <S.Pokemon pokemonType={pokemonType}>
          <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
          <div className='pokemonId'>#{pokemon.id}</div>
          <div className='img'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div className='pokemonType'>{pokemonType}</div>
        </S.Pokemon>
      )}
    </S.Bg>
  )
}
