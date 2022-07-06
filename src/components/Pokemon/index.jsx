import * as S from './style'

export const Pokemon = props => {

  const { pokemon } = props
  const firstLetterUpperCase = (pokemons) => pokemons.name[0].toUpperCase() + pokemons.name.substring(1)

  return (
    <S.Bg>
      {pokemon && (
        <div className='pokemon'>
          <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
          <div className='pokemonId'>#{pokemon.id}</div>
          <div className='img'>
            <img src={pokemon.sprites.front_default} alt="imagem do pokemon" />
          </div>
          <div className='pokemonType'>{pokemon.types[0].type.name}</div>
        </div>
      )}
    </S.Bg>
  )
}
