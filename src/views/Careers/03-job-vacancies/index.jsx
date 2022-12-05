import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { VacanciesList } from './VacanciesList'

export const JobVacancies = ({ vacancies }) => {
  return (
    <Container>
      <InnerContainer>
        <Content>
          <Subheading>Careers</Subheading>
          <Heading>Job Vacancies</Heading>
          <SupportingText>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</SupportingText>
        </Content>

        <Content>
          <VacanciesList vacancies={vacancies} />
        </Content>

      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 56px;
  padding-bottom: 96px;

  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const InnerContainer = styled.div`
  ${utils.fullWidthContainer};

  display: flex;
  gap: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Content = styled.div`
  flex: 1;
`

const Subheading = styled.p`
  color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors[primaryColorKey]['500']};

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.textSm};
  }
`

const Heading = styled.h2`
  margin-top: 12px;
  color: ${(props) => props.theme.color};

  ${typography.styles.displayMd};
  ${typography.weights.semibold};

  @media (max-width: 768px) {
    ${typography.styles.displaySm};
    ${typography.weights.semibold};
  }
`

const SupportingText = styled.p`
  margin-top: 20px;
  color: ${(props) => props.theme.secondaryColor};

  ${typography.styles.textXl};
  ${typography.weights.regular};

  @media (max-width: 768px) {
    margin-top: 16px;
    ${typography.styles.textLg};
    ${typography.weights.regular};
  }
`
