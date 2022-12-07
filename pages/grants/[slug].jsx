import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { services } from '../../services'
import { useRouter } from 'next/router'
import { getFQDN } from '../../src/helpers'

export async function getStaticPaths () {
  const slugs = await services.getProgramSlugs()

  const paths = slugs.map(slug => {
    return {
      params: {
        slug
      }
    }
  })

  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}

export async function getStaticProps ({ locale, params }) {
  const s = await serverSideTranslations(locale, ['common', 'security'])

  return {
    props: {
      ...(s),
      program: await services.getSingleProgram(params.slug),
      videos: await services.getVideos(),
      headerStyle: 'colored'
      // Will be passed to the page component as props
    }
  }
}

export default function SingleProgramPage (props) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{props.program.meta.title}</title>
        <meta name='description' content={props.program.meta.description} />
        <link rel='icon' href='/favicon.ico' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={props.program.meta.title} />
        <meta property='og:description' content={props.program.meta.description} />
        <meta property='og:image' content={getFQDN(props.program.meta.image.src)} />
        <meta property='og:locale' content={router.locale} />
        <meta property='og:url' content={router.asPath} />
        <meta property='twitter:site' content='@neptunemutual' />
        <meta property='twitter:creator' content='@neptunemutual' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:description' content={props.program.meta.description} />
        <meta property='twitter:title' content={props.program.meta.title} />
        <meta property='twitter:image' content={getFQDN(props.program.meta.image.src)} />
        <meta property='twitter:image:alt' content={props.program.meta.image.alt} />
      </Head>

      <main>
        {/* Temporary code */}
        <pre>{JSON.stringify(props.program, null, 2)}</pre>
      </main>
    </>
  )
}
