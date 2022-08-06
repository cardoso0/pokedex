import { Footer, Header, Title, Trainer } from "../../components"
import ash from "../../assets/trainers/ash.png"

export const Trainers = () => {

  return (
    <>
      <Header />
        <div>
          <Title
            title={'Está pronto para iniciar a jornada?'}
            subtitle={'Escolha um Treinador'}
          />
          <Trainer 
            name={'Ash'}
            image={ash}
            age={'Idade'}
            textAge={'10 anos'}
            region={'Região'}
            textRegion={'Kanto'}
            city={'Cidade'}
            textCity={'Pallet'}
            obsA={'Treinador novato'}
            obsB={'Almeja vencer a liga Pokemon'}
          />
        </div>
      <Footer />
    </>
  )
}