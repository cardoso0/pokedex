import { useTranslation } from "react-i18next"
import * as S from "./style"

export const Footer = () => {

  const { t } = useTranslation()

  return (
    <S.Bg>
      <p>{t('Footer.copy')}</p>
    </S.Bg>
  )
}