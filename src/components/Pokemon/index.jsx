import { firstLetterUpperCase, firstLetterUpperCaseType } from '../../shared/firstLetterUpperCase'
import * as S from './style'

export const Pokemon = props => {

  const { pokemon, large, medium, handlePokemon, handleFavorite, heart, tab, favoriteKeyUp, pokemonKeyUp } = props
  const { id, name } = pokemon

  const sprite =
    `https://cdn.traction.one/pokedex/pokemon/${id}.png`
  // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const pokemonType = pokemon.types[0].type.name
  return (
    <S.Pokemon pokemonType={pokemonType} large={large} medium={medium} className={props.pkBg}>
      <S.BgName>
        <div className='pokemonId'>#{id}</div>
        <div className='pokemonName'>{firstLetterUpperCase(pokemon)}</div>
        <div className='heart' onClick={handleFavorite} onKeyUp={favoriteKeyUp} tabIndex={tab}>{heart}</div>
      </S.BgName>
      <div className='img'>
        <img src={sprite} alt={name} onClick={handlePokemon} tabIndex={tab} onKeyUp={pokemonKeyUp}/>
      </div>
      <div className='pokemonType'>{firstLetterUpperCaseType(pokemon)}</div>
      <S.MoreDetails pokemonType={pokemonType}>
        <li>{props.altura}</li>
        <li>{props.peso}</li>
        <li>{props.categoria}</li>
        <li>{props.ability}</li>
      </S.MoreDetails>
    </S.Pokemon>
  )
}
