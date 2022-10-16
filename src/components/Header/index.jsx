import * as S from "./style"
import { Link } from 'react-router-dom'
import pokedex from "../../assets/pokedex.png"
import accessibility from "../../assets/accessibility/acess.png"
import { Menu } from "../Menu"
import { MenuAccessibility } from "../MenuAccessibility"
import { ContextAccessibility } from "../../contexts/ContextAccessibility"
import { useContext } from "react"

export const Header = () => {

  const { showMenu, setShowMenu } = useContext(ContextAccessibility)

  return (
    <S.Bg>
      <S.Header>
        <Link to='/' >
          <img className="logo" src={pokedex} alt="logo pokedex" />
        </Link>
        <Menu />
        <div onClick={() => setShowMenu(true)}>
          <img className="accessibility" src={accessibility} alt="accessibility" />
        </div>
      </S.Header>
        <MenuAccessibility teste={showMenu} />
    </S.Bg>
  )
}