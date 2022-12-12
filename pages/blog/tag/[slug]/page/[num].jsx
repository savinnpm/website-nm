import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { services } from '../../../../../services'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { getFQDN } from '../../../../../src/helpers'
import { Blog } from '../../../../../src/views/Blog'

export async function getStaticPaths ({ locales }) {
  const slugs = await services.getPostFilters()

  const paths = []

  // Use Promise.all to wait for all async operations in the forEach loop to complete
  const promises = locales.map(locale => {
    return Promise.all(slugs.map(async (slug) => {
      const pages = await services.getFilteredPostPages(slug.value)
      pages.forEach(page => {
        paths.push({
          locale,
          params: {
            slug: slug.value,
            num: page
          }
        })
      })
    }))
  })

  // Wait for all promises to resolve, then return the paths array
  await Promise.all(promises)

  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}

export async function getStaticProps ({ locale, params }) {
  const s = await serverSideTranslations(locale, ['common', 'blog'])
  const filteredPosts = await services.getFilteredPosts(params.slug, parseInt(params.num - 1))

  return {
    props: {
      ...(s),
      blogPosts: filteredPosts.posts,
      totalPages: filteredPosts.total,
      filter: params.slug,
      page: parseInt(params.num - 1),
      filters: await services.getPostFilters(),
      videos: await services.getVideos(),
      pages: await services.getPages(),
      headerStyle: 'colored'
      // Will be passed to the page component as props
    }
  }
}

export default function FilteredAndPaginatedBlogPage (props) {
  const { t } = useTranslation('blog')
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{t('META_TITLE')}</title>
        <meta name='description' content={t('META_DESCRIPTION')} />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={t('META_OG_TITLE')} />
        <meta property='og:description' content={t('META_OG_DESCRIPTION')} />
        <meta property='og:image' content={getFQDN(t('META_OG_IMAGE'))} />
        <meta property='og:locale' content={router.locale} />
        <meta property='og:url' content={router.asPath} />
        <meta property='twitter:site' content='@neptunemutual' />
        <meta property='twitter:creator' content='@neptunemutual' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:description' content={t('META_TWITTER_DESCRIPTION')} />
        <meta property='twitter:title' content={t('META_TWITTER_TITLE')} />
        <meta property='twitter:image' content={getFQDN(t('META_TWITTER_IMAGE'))} />
        <meta property='twitter:image:alt' content={t('META_TWITTER_IMAGE_ALT')} />
      </Head>

      <main>
        <Blog
          blogPosts={props.blogPosts}
          filter={props.filter}
          totalPages={props.totalPages}
          page={props.page}
          filters={props.filters}
        />
      </main>
    </>
  )
}
