import styled from 'styled-components'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'
import { PageNumbers } from './PageNumbers'

export const Pagination = ({ page = 0, setPage, isLast, handlePrev, handleNext, totalPages }) => {
  const getPageNumbers = () => {
    return [...Array(totalPages).keys()]
  }

  const pages = getPageNumbers()

  return (
    <Container>
      <InnerContainer>
        <PaginationContainer>
          <ButtonContainer>
            {page !== 0 && (
              <ButtonStyle onClick={handlePrev}>
                <>
                  <Icon size={20} variant='arrow-left' />
                  <span>Previous</span>
                </>
              </ButtonStyle>
            )}
          </ButtonContainer>
          <PageNumbers page={page} pages={pages} setPage={setPage} />
          <ButtonContainer>
            {!isLast && (
              <ButtonStyle onClick={handleNext}>
                <>
                  <span>Next</span>
                  <Icon size={20} variant='arrow-right' />

                </>
              </ButtonStyle>
            )}
          </ButtonContainer>
        </PaginationContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};
`
const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonContainer = styled.div`
  min-width: 65px;
`

const ButtonStyle = styled.button`
  display: flex;
  gap: 8px;
  justify-content:space-between;
  align-items: center;
  cursor: pointer;
`
