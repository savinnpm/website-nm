import { NewsletterSignupForm } from '../../components/NewsletterSignupForm'
import { PdfViewer } from '../../components/PdfViewer'
import { Hero } from './01-hero'

export const Audit = (props) => {
  return (
    <>
      <Hero audit={props.audit} />

      <PdfViewer url={`/${props.audit.report}`} />

      <NewsletterSignupForm paddingTop />
    </>
  )
}
