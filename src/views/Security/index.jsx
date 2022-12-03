import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'
import { Hero } from './01-hero'
import { Reviews } from './02-reviews'

export const Security = (props) => {
  return (
    <>
      <Hero />

      <Reviews audits={props.audits} />

      <NewsletterSignupForm />
    </>
  )
}
