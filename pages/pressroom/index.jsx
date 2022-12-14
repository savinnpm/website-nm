import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { getFQDN } from '../../src/helpers'
import { services } from '../../services'
import { PressRoom } from '../../src/views/PressRoom'

export async function getStaticProps ({ locale }) {
  const s = await serverSideTranslations(locale, ['common', 'press-room'])
  const pressRoom = await services.getFilteredPressroomPosts()
  return {
    props: {
      ...(s),
      news: await services.getNews(),
      pressRoomPosts: pressRoom.posts,
      pressRoomPostsTotal: pressRoom.total,
      pressRoomPage: 0,
      videos: await services.getVideos(),
      pages: await services.getPages(),
      headerStyle: 'colored'
      // Will be passed to the page component as props
    }
  }
}

export default function PressPage (props) {
  const { t } = useTranslation('press-room')
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
        <PressRoom
          news={props.news}
          pressRoomPosts={props.pressRoomPosts}
          pressRoomPostsTotal={props.pressRoomPostsTotal}
          pressRoomPage={props.pressRoomPage}
        />
      </main>
    </>
  )
}
