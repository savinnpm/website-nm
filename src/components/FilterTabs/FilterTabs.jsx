import Link from 'next/link'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { typography } from '../../../styles/typography'

export const FilterTabs = ({ filters, activeFilter }) => {
  return (
    <Container>
      {
        filters.map((f, i) => (
          <FilterItem
            key={i}
            data-isactive={activeFilter === f.value}
            href={{
              query: {
                tab: f.value
              }
            }}
            scroll={false}
          >
            {f.text}
          </FilterItem>
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  margin: 32px auto;
  display: flex;
  gap: 8px;
`

const FilterItem = styled(Link)`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  ${typography.styles.textSm};
  ${typography.weights.semibold};

  color: ${props => props.theme.isLightMode ? colors.gray[500] : colors.gray[300]};
  
  &[data-isactive='true'] {
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey][700] : colors.white};
    background-color: ${props => props.theme.isLightMode ? colors[primaryColorKey][50] : colors[primaryColorKey][700]};
  }
`
