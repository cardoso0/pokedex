import { firstLetterUpperCase, firstLetterUpperCaseType } from '../../shared/firstLetterUpperCase'
import * as S from './style'

export const Pokemon = props => {

  const { pokemon, large, medium, handlePokemon, handleHeart, heart } = props
  const { id, name } = pokemon

  const sprite =
    `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const pokemonType = pokemon.types[0].type.name
  return (
    <S.Pokemon pokemonType={pokemonType} large={large} medium={medium} >
      <S.BgName>
        <div className='pokemonId'>#{id}</div>
        <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
        <div className='heart' onClick={handleHeart}>{heart}</div>
      </S.BgName>
      <div className='img'>
        <img src={sprite} alt={name} onClick={handlePokemon}/>
      </div>
      <div className='pokemonType'>{firstLetterUpperCaseType(pokemon)}</div>
    </S.Pokemon>
  )
}
