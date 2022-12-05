import Link from 'next/link'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'

export const VacancyCard = ({ vacancy }) => {
  return (
    <Container>
      <Category>{vacancy.department}</Category>
      <Title>{vacancy.title}</Title>
      <Intro>{vacancy.intro}</Intro>
      <Link href={`/careers/${vacancy.slug}`}>View Job</Link>
    </Container>
  )
}

const Container = styled.section`
  padding: 24px 24px 28px;
  gap: 24px;

  background: ${(props) => props.theme.isLightMode ? colors.white : colors.gray['700']};
  border: 1px solid ${(props) => props.theme.isLightMode ? colors.gray['200'] : colors.gray['700']};
  border-radius: 16px;
`

const Category = styled.p`
color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};

${typography.styles.textMd};
${typography.weights.semibold};

@media (max-width: 768px) {
  ${typography.styles.textSm};
}
`

const Title = styled.h3`
  margin-top: 4px;
  color: ${(props) => props.theme.color};

  ${typography.styles.textLg};
  ${typography.weights.medium};
`

const Intro = styled.p`
  margin-top: 16px;
  color: ${(props) => props.theme.secondaryColor};

  ${typography.styles.textMd};
  ${typography.weights.regular};
`
