import * as S from './style'
import { Footer, Header, Title, Trainer } from "../../components"
import { trainers } from "../../components/Trainer/trainers"
import { useContext, useState, useEffect } from 'react'
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
  const [trainerClicked, setTrainerClicked] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  const handleClick = (trainerr) => {
    setTrainer(trainerr)
    setTrainerSelected(true)
    setTrainerClicked(trainerr.name)
  }

  const moveToNextPage = () => {
    localStorage.setItem('trainer', JSON.stringify(trainer))
    navigate("/pokedexx")
  }

  const trainerIsSelected = () => {
    return trainer ? moveToNextPage() : setTrainerSelected(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sliderSettings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          {isMobile ? (
            <Slider {...sliderSettings} className="slider">
              {trainers.map((trainer, index) => (
                <Trainer
                  className={`viewed-trainer ${trainerClicked == trainer.name ? "selected-trainer" : ""}`}
                  tab={8}
                  keyUp={(event) => handleEnterKey(event, () => setTrainer(trainer))}
                  key={index}
                  select={() => handleClick(trainer)}
                  name={trainer.name}
                  image={trainer.image}
                  age={'Idade'}
                  textAge={trainer.textAge}
                  region={'Região'}
                  textRegion={trainer.textRegion}
                  city={'Cidade'}
                  textCity={trainer.textCity}
                  obsA={trainer.obsA}
                  obsB={trainer.obsB}
                />
              ))}
            </Slider>
          ) : (
            <div className="trainers-grid">
              {trainers.map((trainer, index) => (
                <Trainer
                  className={`viewed-trainer ${trainerClicked == trainer.name ? "selected-trainer" : ""}`}
                  tab={8}
                  keyUp={(event) => handleEnterKey(event, () => setTrainer(trainer))}
                  key={index}
                  select={() => handleClick(trainer)}
                  name={trainer.name}
                  image={trainer.image}
                  age={'Idade'}
                  textAge={trainer.textAge}
                  region={'Região'}
                  textRegion={trainer.textRegion}
                  city={'Cidade'}
                  textCity={trainer.textCity}
                  obsA={trainer.obsA}
                  obsB={trainer.obsB}
                />
              ))}
            </div>
          )}
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