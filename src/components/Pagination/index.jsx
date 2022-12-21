import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { LinkGrayButton } from '../Button/LinkGrayButton'
import { PageNumbers } from './PageNumbers'

export const Pagination = ({ page = 0, setPage, isLast, handlePrev, handleNext, totalPages }) => {
  const { t } = useTranslation('common')
  const getPageNumbers = () => {
    return [...Array(totalPages).keys()]
  }

  const pages = getPageNumbers()

  return (
    <Container>
      <PaginationContainer>

        <LinkGrayButton onClick={handlePrev} iconLeading iconVariant='arrow-left' disabled={page === 0}>{t('Previous')}</LinkGrayButton>

        <PageNumbers page={page} pages={pages} setPage={setPage} />

        <LinkGrayButton onClick={handleNext} iconTrailing iconVariant='arrow-right' disabled={isLast}>{t('Next')}</LinkGrayButton>

      </PaginationContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 64px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
`
