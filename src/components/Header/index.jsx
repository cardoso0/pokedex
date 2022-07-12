import * as S from "./style"
import { Link } from 'react-router-dom'
import pokedex from "../../assets/pokedex.png"
import pokebola from "../../assets/favicon.png"

export const Header = () => {

  return (
    <S.Bg>
      <S.Main>
        <Link to='/pokedex/' ><img className="logo" src={pokedex} alt="logo pokedex" /></Link>
        <img className="pokebola" src={pokebola} alt="pokebola" />
      </S.Main>
    </S.Bg>
  )
}