import * as S from './style'

export const Trainer = props => {

  const { name, image, age, textAge, region, textRegion,
    city, textCity, obsA, obsB, select, keyUp } = props

  return (
    <S.Card tabIndex={8} onKeyUp={keyUp}>
      <h1>{name}</h1>
      <figure onClick={select}>
        <img src={image} alt={name} />
      </figure>
      <S.Info>
        <table>
          <tbody>
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
          </tbody>
        </table>
        <p>{obsA}</p>
        <p>{obsB}</p>
      </S.Info>
    </S.Card>
  )
}