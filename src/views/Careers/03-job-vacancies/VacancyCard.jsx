import Link from 'next/link'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Button } from '../../../components/Button'
import { Badges } from './Badges'
import { WorkDetail } from './WorkDetail'

export const VacancyCard = ({ vacancy }) => {
  return (
    <Container>

      <TitleAndCta>
        <TextContainer>
          <H3>
            <Dept>{vacancy.department}</Dept>
            <Title>{vacancy.title} <Badges badges={vacancy.badges} /></Title>
          </H3>
        </TextContainer>

        <Button
          href={`/careers/${vacancy.slug}`}
          as={Link}
          hierarchy='link-color'
          size='sm'
          iconTrailing
          iconVariant='arrow-right'
        >
          View Job
        </Button>
      </TitleAndCta>

      <Intro>{vacancy.intro}</Intro>

      <WorkDetails>
        <WorkDetail variant='marker-pin-02'>{vacancy.location}</WorkDetail>
        <WorkDetail variant='clock'>{vacancy.type}</WorkDetail>
      </WorkDetails>
    </Container>
  )
}

const Container = styled.section`
  padding: 24px 24px 28px;
  gap: 24px;

  background: ${(props) => props.theme.isLightMode ? colors.white : colors.gray['700']};
  border: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['200'] : colors.gray['600']};
  border-radius: 16px;
`

const TitleAndCta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  flex-wrap: wrap;
`

const TextContainer = styled.div`
`

const Dept = styled.p`
  color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.textSm};
  }
`

const H3 = styled.h3``

const Title = styled.div`
  margin-top: 4px;
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;

  ${typography.styles.textLg};
  ${typography.weights.medium};
`

const Intro = styled.p`
  margin-top: 16px;
  color: ${(props) => props.theme.secondaryColor};

  ${typography.styles.textMd};
  ${typography.weights.regular};
`

const WorkDetails = styled.div`
margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
`
