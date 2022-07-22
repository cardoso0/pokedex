import { firstLetterUpperCase, firstLetterUpperCaseType } from '../../shared/firstLetterUpperCase'
import * as S from './style'

export const Pokemon = props => {

  const { pokemon, large, medium } = props
  const { id, name, sprites } = pokemon

  const pokemonType = pokemon.types[0].type.name
  return (
    <S.Pokemon pokemonType={pokemonType} large={large} medium={medium}>
      <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
      <div className='pokemonId'>#{id}</div>
      <div className='img'>
        <img src={sprites.front_default} alt={name} />
      </div>
      <div className='pokemonType'>{firstLetterUpperCaseType(pokemon)}</div>
    </S.Pokemon>
  )
}
