import * as S from "./style"
import { Link } from 'react-router-dom'
import pokedex from "../../assets/pokedex.png"
import accessibility from "../../assets/accessibility/icon_acessibilidade.svg"
import { Menu } from "../Menu"
import { MenuAccessibility } from "../MenuAccessibility"
import { ContextAccessibility } from "../../contexts/ContextAccessibility"
import { useContext } from "react"

export const Header = () => {

  const { showMenu, setShowMenu } = useContext(ContextAccessibility)

  const verifyShowMenu = showMenu ? false : true

  return (
    <S.Bg>
      <S.Header>
        <Link to='/' >
          <img className="logo" src={pokedex} alt="logo pokedex" />
        </Link>
        <Menu />
        <S.Accessibility onClick={() => setShowMenu(verifyShowMenu)}>
          <span>Acessibilidade</span>
          <img className="accessibility" src={accessibility} alt="accessibility" />
        </S.Accessibility>
      </S.Header>
        <MenuAccessibility showMenu={showMenu} />
    </S.Bg>
  )
}