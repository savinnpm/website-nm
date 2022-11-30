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
          <Button className={`${page === 0 && 'empty'}`} onClick={handlePrev}>
            {page !== 0 && (
              <>
                <Icon size={20} variant='arrow-left' />
                <span>Previous</span>

              </>
            )}
          </Button>
          <PageNumbers page={page} pages={pages} setPage={setPage} />
          <Button className={`${isLast && 'empty'}`} onClick={handleNext}>
            {!isLast && (
              <>
                <span>Next</span>
                <Icon size={20} variant='arrow-right' />

              </>
            )}
          </Button>
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

const Button = styled.button`
  display: flex;
  gap: 8px;
  justify-content:space-between;
  align-items: center;
  cursor: pointer;

  &.empty{
    width: 87px;
  }
`
