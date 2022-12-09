import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'
import { Card } from './Card'

const Annoucement = () => {
  return (
    <Container>
      <HeaderText>Press Room / Latest Announcements</HeaderText>
      <Articles>
        {['', '', '', ''].map((_, i) => {
          return <Card key={i} />
        })}
      </Articles>
      <Paginate>
        <Icon size={18} variant='arrow-left' />
        <Icon size={18} variant='arrow-right' />
      </Paginate>
    </Container>
  )
}

const Container = styled.div`
  ${utils.fullWidthContainer}
  padding-top: 96px;
  padding-bottom: 106px;
  border-bottom: 1px solid ${colors.gray[300]}
`

const Paginate = styled.div`
  margin-top: 66px;
  padding-top: 30px;
  border-top: 1px solid ${colors.gray[200]}
`

const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const HeaderText = styled.h2`
  ${typography.weights.semibold}
  ${typography.styles.displayXs}
  color: ${colors.gray[900]};
`

export { Annoucement }
