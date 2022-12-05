import styled from 'styled-components'
import { VacancyCard } from './VacancyCard'

export const VacanciesList = ({ vacancies }) => {
  return (
    <Container>
      {vacancies.map(vacancy => {
        return (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        )
      })}
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
