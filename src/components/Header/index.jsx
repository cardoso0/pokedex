import * as S from "./style"
import { Link } from 'react-router-dom'
import pokedex from "../../assets/pokedex.png"
import pokebola from "../../assets/favicon.png"
import { Menu } from "../Menu"
import { MenuAccessibility } from "../MenuAccessibility"

export const Header = (props) => {

  return (
    <S.Bg>
      <S.Header>
        <Link to='/pokedex/pokedexx' >
          <img className="logo" src={pokedex} alt="logo pokedex" />
        </Link>
        <Menu />
        <MenuAccessibility switch={props.switch} />
        <Link to='/pokedex/favorites'>
          <img className="pokebola" src={pokebola} alt="pokebola" />
        </Link>
      </S.Header>
    </S.Bg>
  )
}