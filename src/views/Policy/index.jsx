import { Hero } from './01-hero'
import { DetailComponent } from '../../components/DetailComponent'

export const Policy = ({ page, activeSlug, slugs }) => {
  return (
    <>
      <Hero slugs={slugs} activeSlug={activeSlug} />

      <DetailComponent
        html={page.content.html}
        wrapperClass={`${activeSlug}-detail`}
        title={page.title}
        sharelinks={false}
      />
    </>
  )
}
