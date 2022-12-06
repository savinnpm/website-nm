import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'
import { PdfViewer } from '../../components/PdfViewer'
import { Hero } from './01-hero'

const crumbs = [
  { name: 'Home', link: '/' },
  { name: 'Security', link: '/security' }
]

export const Audit = (props) => {
  return (
    <>
      <Hero audit={props.audit} crumbs={crumbs} />

      <PdfViewer url={`${props.audit.report}`} />

      <NewsletterSignupForm paddingTop />
    </>
  )
}
