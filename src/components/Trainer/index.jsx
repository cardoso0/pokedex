import * as S from './style'

export const Trainer = props => {

  const { name, image, age, textAge, region, textRegion,
    city, textCity, obsA, obsB } = props

  return (
    <S.Card>
      <h1>{name}</h1>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <S.Info>
        <table>
          <tr>
            <th scope="row">{age}</th>
            <td>{textAge}</td>
          </tr>
          <tr>
            <th scope="row">{region}</th>
            <td>{textRegion}</td>
          </tr>
          <tr>
            <th scope="row">{city}</th>
            <td>{textCity}</td>
          </tr>
        </table>
        <p>{obsA}</p>
        <p>{obsB}</p>
      </S.Info>
    </S.Card>
  )
}