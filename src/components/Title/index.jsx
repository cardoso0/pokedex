import * as S from './style'

export const Title = props => {

  const { title, subtitle } = props

  return (
    <S.Title>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </S.Title>
  )
}
