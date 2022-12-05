import Link from 'next/link'
import { Hero } from './01-hero'
import { Benefits } from './02-benefits'

export const Careers = (props) => {
  return (
    <>
      <Hero />

      <Benefits />

      {props.vacancies.map(vacancy => {
        return (
          <div key={vacancy.id}>
            <Link href={`/careers/${vacancy.slug}`}>{vacancy.title}</Link>
          </div>
        )
      })}
    </>
  )
}
