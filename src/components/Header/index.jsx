import * as S from "./style"
import pokedex from "../../assets/pokedex.png"
import pokebola from "../../assets/favicon.png"

export const Header = () => {

  return (
    <S.Bg>
      <S.Main>
        <img className="logo" src={pokedex} alt="logo pokedex" />
        <img className="pokebola" src={pokebola} alt="pokebola" />
      </S.Main>
    </S.Bg>
  )
}