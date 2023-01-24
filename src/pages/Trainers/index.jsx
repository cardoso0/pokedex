import * as S from './style'
import { Footer, Header, Title, Trainer } from "../../components"
import { trainers } from "../../components/Trainer/trainers"
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContextTrainer } from '../../contexts/index'
import { handleEnterKey } from '../../shared'
import { useNavigate } from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Trainers = () => {

  const { t } = useTranslation()
  const navigate = useNavigate()

  const { trainer, setTrainer } = useContext(ContextTrainer)

  const [trainerSelected, setTrainerSelected] = useState(true)

  const handleClick = (trainerr) => {
    setTrainer(trainerr)
  }

  const moveToNextPage = () => {
    localStorage.setItem('trainer', JSON.stringify(trainer))
    navigate("/pokedexx")
  }

  const trainerIsSelected = () => {
    return trainer ? moveToNextPage() : setTrainerSelected(false)
  }

  const settings = {
    responsive: [
      {
        breakpoint: 1800,
        settings: "unslick"
      },
      {
        breakpoint: 480,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    ]
  };

  return (
    <>
      <Header />
      <S.Bg>
        <Title
          title={t('Title.titleH')}
          subtitle={t('Title.subtitleH')}
        />
        <S.Trainers>
          <Slider {...settings} className="slider">
            {trainers.map((item, index) =>
              <Trainer
                tab={8}
                keyUp={(event) => handleEnterKey(event, () => setTrainer(item))}
                key={index}
                select={() => {
                  handleClick(item)
                  setTrainerSelected(true)
                }}
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
          </Slider>
        </S.Trainers>
        <S.CallToAction>
          <h1>{t('Home.title')}</h1>
          {!trainerSelected ?
            <p>Selecione um Treinador</p>
            :
           (trainer &&
            <p>Treinador selecionado: {trainer.name}</p>
           )}
          <button
            onClick={trainerIsSelected}
            tabIndex={9}
          >{t('Home.btn')}</button>
        </S.CallToAction>
      </S.Bg>
      <Footer />
    </>
  )
}