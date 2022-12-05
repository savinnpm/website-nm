import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { services } from '../../services'
import { Details } from '../../src/views/Careers/Details'

export async function getStaticPaths () {
  const slugs = await services.getVacancySlugs()

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
  const s = await serverSideTranslations(locale, ['common', 'security', 'careers'])

  return {
    props: {
      ...(s),
      vacancy: await services.getSingleVacancy(params.slug),
      videos: await services.getVideos(),
      headerStyle: 'colored'
      // Will be passed to the page component as props
    }
  }
}

const crumbs = [
  { name: 'Home', link: '/' },
  { name: 'Careers', link: '/careers' }
]

export default function VacancyPage (props) {
  return (
    <>
      <Head>
        <title>{props.vacancy.meta.title}</title>
        <meta name='description' content={props.vacancy.meta.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Details crumbs={crumbs} vacancy={props.vacancy} />
      </main>
    </>
  )
}
