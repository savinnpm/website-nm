import { Hero } from './01-hero'
import { DetailComponent } from '../../components/DetailComponent'

export const Policy = ({ pages, slug }) => {
  const page = pages.find(page => page.slug === slug)

  return (
    <>
      <Hero pages={pages} slug={slug} />

      <DetailComponent
        html={page.content.html}
        wrapperClass={`${page.slug}-detail`}
        title={page.title}
        sharelinks={false}
      />
    </>
  )
}
