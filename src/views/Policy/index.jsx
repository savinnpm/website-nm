import { Hero } from './01-hero'
import { DetailComponent } from '../../components/DetailComponent'

export const Policy = ({ page, activeSlug, slugs }) => {
  return (
    <>
      <Hero slugs={slugs} activeSlug={activeSlug} />

      <DetailComponent
        headers={page.content.toc}
        html={page.content.html}
        title={page.title}
        sharelinks={false}
      />
    </>
  )
}
