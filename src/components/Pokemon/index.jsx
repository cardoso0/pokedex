import { firstLetterUpperCase, firstLetterUpperCaseType } from '../../shared/firstLetterUpperCase'
import * as S from './style'

export const Pokemon = props => {

  const { pokemon } = props

  

  const pokemonType = pokemon.types[0].type.name
  return (
    <S.Pokemon pokemonType={pokemonType} >
      <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
      <div className='pokemonId'>#{pokemon.id}</div>
      <div className='img'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className='pokemonType'>{firstLetterUpperCaseType(pokemon)}</div>
    </S.Pokemon>
  )
}
