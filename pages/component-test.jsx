import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { services } from '../services'
import { ComponentLib } from '../src/views/ComponentLib'

export async function getStaticProps ({ locale }) {
  const s = await serverSideTranslations(locale, ['common'])

  return {
    props: {
      ...(s),
      videos: await services.getVideos(),
      pages: await services.getPages()
      // Will be passed to the page component as props
    }
  }
}

export default function ComponentsTest () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <ComponentLib />
      </main>
    </>
  )
}
