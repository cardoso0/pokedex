import * as S from './style'
import { Footer, Header, Title, Trainer } from "../../components"
import { trainers } from "../../components/Trainer/trainers"

export const Trainers = () => {
  // console.log(trainers[0].name)
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
      </S.Bg>
      <Footer />
    </>
  )
}