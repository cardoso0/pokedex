import * as S from './style'
import { Footer, Header, Title, Trainer } from "../../components"
import { trainers } from "../../components/Trainer/trainers"
import { useState } from 'react'

export const Trainers = () => {

  const [trainer, setTrainer] = useState('')

  const handleClick = (name) => {
    setTrainer(name)
  }

  return (
    <>
      <Header />
      <S.Bg>
        <Title
          title={'Está pronto para iniciar a jornada?'}
          subtitle={'Escolha um Treinador'}
        />
        <S.Trainers>
          {trainers.map(item =>
            <Trainer
              select={() => handleClick(item.name)}
              name={item.name}
              image={item.image}
              age={'Idade'}
              textAge={item.textAge}
              region={'Região'}
              textRegion={item.textRegion}
              city={'Cidade'}
              textCity={item.textCity}
              obsA={item.obsA}
              obsB={item.obsB}
            />
          )}
        </S.Trainers>
        <S.CallToAction>
          <h1>Não vacile igual ao Ash</h1>
          <button onClick={() => localStorage.setItem('trainer', trainer)}>Forme a sua equipe Pokémon!</button>
        </S.CallToAction>
      </S.Bg>
      <Footer />
    </>
  )
}