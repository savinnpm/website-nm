import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

const PAGINATION_INDEX = 3

export const PageNumbers = ({ pages, setPage, page }) => {
  const startsFrom = page === 0 ? 0 : page - 1
  if (pages.length > 6) {
    return (
      <PageNumbersContainer>
        {pages.slice(startsFrom, startsFrom + PAGINATION_INDEX).map((pageNum, index) => (
          <PageNumber onClick={() => setPage(index + startsFrom)} className={`${page === index + startsFrom && 'active'}`} key={index}>{pageNum + 1}</PageNumber>
        ))}
        <TripleDots>...</TripleDots>
        {pages.slice(pages.length - PAGINATION_INDEX, pages.length).map((pageNum, index) => (
          <PageNumber onClick={() => { setPage(pages.length - PAGINATION_INDEX + index) }} className={`${page === pages.length - PAGINATION_INDEX + index && 'active'}`} key={index}>{pageNum + 1}</PageNumber>
        ))}
      </PageNumbersContainer>
    )
  }

  return (
    <PageNumbersContainer>
      {pages.map((pageNum, index) => (
        <PageNumber onClick={() => setPage(index)} className={`${page === index && 'active'}`} key={index}>{pageNum + 1}</PageNumber>
      ))}
    </PageNumbersContainer>
  )
}

const PageNumbersContainer = styled.div`
  display: flex;
  gap:1px;
`
const PageNumber = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 40px;
  cursor:pointer;
  height: 40px;
  border-radius: 8px;

  &:hover{
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.primary['700']}
  }

  &.active{
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.primary['700']}
  }
`

const TripleDots = styled.span`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  justify-content: center;
`
