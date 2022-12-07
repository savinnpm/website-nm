import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'
import { Hero } from './01-hero'
import { EcosystemSlider } from './02-slider'

export const Ecosystem = ({ ecosystems }) => {
  return (
    <>
      <Hero />

      <EcosystemSlider ecosystems={ecosystems} />

      <NewsletterSignupForm paddingTop />
    </>
  )
}
