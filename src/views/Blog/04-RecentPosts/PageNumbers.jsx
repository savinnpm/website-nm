import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

const PAGINATION_INDEX = 3

export const PageNumbers = ({ pages, setPage, page }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  console.log(isMobile)

  const startsFrom = page === 0 ? 0 : page - 1

  if (isMobile) {
    return (
      <MobilePageNumberContainer>
        Page <span>{page + 1}</span> of <span>{pages.length}</span>

      </MobilePageNumberContainer>
    )
  }

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
  gap:2px;
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
  &:focus{
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.primary['700']};
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.isLightMode ? colors.gray['100'] : colors[primaryColorKey]['900']};
  }
`

const TripleDots = styled.span`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  justify-content: center;
`
const MobilePageNumberContainer = styled.div`
  display: flex;
  ${typography.styles.textSm}
  ${typography.weights.regular}

  & span{
    margin: 0 5px;
    ${typography.weights.medium}
  }
`
