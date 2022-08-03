import { useTranslation } from "react-i18next"
import * as S from "./style"

export const Footer = () => {

  const { t } = useTranslation()

  return (
    <S.Bg>
      <p>{t('footer')}</p>
    </S.Bg>
  )
}