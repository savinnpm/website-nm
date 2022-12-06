import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'
import { Hero } from './01-hero'
import { ActiveCampaigns } from './02-active-campaigns'

export const GrantsAndBounties = ({ programs }) => {
  return (
    <>
      <Hero />

      <ActiveCampaigns programs={programs} />

      <NewsletterSignupForm paddingTop={96} />
    </>
  )
}
