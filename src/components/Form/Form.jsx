import * as S from './style'

export const Form = () => {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <S.Bg>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text"
          autoFocus="on"
          placeholder='Procure um Pokemon'
        />
        <button>Enviar</button>
      </form>
    </S.Bg>
  )
}