import * as S from './style'
import { Footer, Header, Title, Trainer } from "../../components"
import { trainers } from "../../components/Trainer/trainers"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Trainers = () => {

  const { t } = useTranslation()

  const [trainer, setTrainer] = useState('')

  const handleClick = (name) => {
    setTrainer(name)
  }

  return (
    <>
      <Header />
      <S.Bg>
        <Title
          title={t('Title.titleH')}
          subtitle={t('Title.subtitleH')}
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
          <h1>{t('Home.title')}</h1>
          <button onClick={() => localStorage.setItem('trainer', trainer)}>{t('Home.btn')}</button>
        </S.CallToAction>
      </S.Bg>
      <Footer />
    </>
  )
}