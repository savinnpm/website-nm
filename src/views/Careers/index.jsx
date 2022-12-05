import { Hero } from './01-hero'
import { Benefits } from './02-benefits'
import { JobVacancies } from './03-job-vacancies'

export const Careers = (props) => {
  return (
    <>
      <Hero />

      <Benefits />

      <JobVacancies vacancies={props.vacancies} />
    </>
  )
}
