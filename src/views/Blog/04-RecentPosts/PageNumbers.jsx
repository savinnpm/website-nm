import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

const PAGINATION_INDEX = 3

export const PageNumbers = ({ pages, setPage, page }) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  // start slice begins with 0 and has page 0, 1 & 2
  const startSliceBegin = 0

  // end slice begins with the third last page (3rd last, 2nd last & the last page)
  const endSliceBegin = pages.length - PAGINATION_INDEX

  let middleSlice = []

  // if current page is anywhere between(including) 3rd & 3rd last page,
  // only then we have the middle slice else only start & end slice
  if ((endSliceBegin >= page) &&
    (page >= (startSliceBegin + PAGINATION_INDEX - 1))) {
    // if current page is anywhere between(including) 5th & 5th last page,
    // then middle slice will have 3 pages
    // (current page - 1, current page, current page + 1)
    if ((page >= startSliceBegin + PAGINATION_INDEX + 1) &&
        (page <= endSliceBegin - 2)) {
      middleSlice = pages.slice(page - 1, page + 2)
    }

    // if current page is the 3rd page,
    // then middle slice will have only 1 page, the 4th page
    if (page === startSliceBegin + PAGINATION_INDEX - 1) {
      middleSlice = pages.slice(page + 1, page + 2)
    }

    // if current page is the 4th page,
    // then middle slice will have 2 pages, the 4th page & 5th page
    if (page === startSliceBegin + PAGINATION_INDEX) {
      middleSlice = pages.slice(page, page + 2)
    }

    // if current page is the 3rd last page,
    // then middle slice will have only 1 page, the 4th last page
    if (page === endSliceBegin) {
      middleSlice = pages.slice(page - 1, page)
    }

    // if current page is the 4th last page,
    // then middle slice will have 2 pages, the 5th last page & 4th last page
    if (page === endSliceBegin - 1) {
      middleSlice = pages.slice(page - 1, page + 1)
    }
  }

  const startSlice = pages.slice(startSliceBegin, startSliceBegin + PAGINATION_INDEX)
  const endSlice = pages.slice(endSliceBegin, pages.length)

  if (isMobile) {
    return (
      <MobilePageNumberContainer>
        Page <span>{page + 1}</span> of <span>{pages.length}</span>

      </MobilePageNumberContainer>
    )
  }

  const Page = ({ p }) => (
    <PageNumber
      onClick={() => setPage(p)}
      className={`${page === p && 'active'}`}
    >
      {p + 1}
    </PageNumber>
  )

  if (pages.length > 6) {
    return (
      <PageNumbersContainer>
        {
          startSlice.map((pageNum, index) => <Page p={pageNum} key={index} />)
        }

        {
          middleSlice?.length
            ? (
              <>
                {
                  middleSlice[0] - startSlice.at(-1) > 1 && <TripleDots>...</TripleDots>
                }

                {
                  middleSlice.map((pageNum, i) => <Page p={pageNum} key={i} />)
                }

                {
                  endSlice[0] - middleSlice.at(-1) > 1 && <TripleDots>...</TripleDots>
                }
              </>
              )
            : <TripleDots>...</TripleDots>
        }

        {
          endSlice.map((pageNum, index) => <Page p={pageNum} key={index} />)
        }
      </PageNumbersContainer>
    )
  }

  return (
    <PageNumbersContainer>
      {pages.map((pageNum, index) => <Page p={pageNum} key={index} />)}
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
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors[primaryColorKey]['700']}
  }

  &.active{
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors[primaryColorKey]['700']}
  }

  &:focus-visible{
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors[primaryColorKey]['700']};
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
