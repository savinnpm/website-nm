import styled from 'styled-components'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { typography } from '../../../styles/typography'
import { colors } from '../../../styles/colors'
import { utils } from '../../../styles/utils'

import { Button } from '../../../src/components/Button'
import { Breadcrumbs } from '../../../src/components/Breadcrums'
import { TableOfContents } from '../../../src/components/BlogDetails/TableOfContents'
import { Shareit } from '../../../src/components/Shareit'

import { Content } from '../../../src/views/SingleBlog/Content'

const Details = (props) => {
  const { t } = useTranslation('careers')

  const wrapperClass = 'article'

  return (
    <>
      <Header>
        <Title>{props.vacancy.title}</Title>
      </Header>

      <MainWrapper>
        <Sidebar>
          <TableOfContents title={props.vacancy.title} wrapperClass={wrapperClass} />
        </Sidebar>

        <ContentWrapper>
          <Breadcrumbs crumbs={[...props.crumbs, { name: props.vacancy.title, link: '#' }]} />

          <Types>
            <Type>
              <Label>{t('DEPARTMENT')}</Label>
              <TypeContent>{props.vacancy.department}</TypeContent>
            </Type>
            <Type>
              <Label>{t('JOB_TYPE')}</Label>
              <TypeContent>{props.vacancy.type}</TypeContent>
            </Type>
            <Type>
              <Label>{t('LOCATION')}</Label>
              <TypeContent>{props.vacancy.location}</TypeContent>
            </Type>
          </Types>

          <Content content={props.vacancy.description.html} wrapperClass={wrapperClass} />
          <Shareit title={props.vacancy.title} intro={(props.vacancy.text || '').substr(0, 100)} />

          <Link target='_blank' href={props.vacancy.form} rel='noreferrer'>
            <Button hierarchy='primary' size='lg' iconTrailing iconVariant='arrow-square-up-right'>
              {t('SUBMIT_JOB_APPLICATION')}
            </Button>
          </Link>

        </ContentWrapper>

      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  ${utils.fullWidthContainer};
  padding-left: 86px;
  padding-right: 86px;
  word-break: break-word;

  padding-top: 60px;
  padding-bottom: 96px;


  display: grid;
  gap: 64px;
  grid-template-columns: 4fr 9fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    ${utils.fullWidthContainer};
  }
`

const Sidebar = styled.div`
  border-right: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
`

const ContentWrapper = styled.div`
  overflow: hidden;
   
  img {
    height: auto;
    width: 100%;
    object-fit: contain;
  }

  p,
  li {
    color: ${colors.gray[600]};
    ${typography.weights.regular}
    ${typography.styles.textLg}
  }

  li {
    line-height: 28px;
  }
  
  h2 {
    margin-bottom: 12px;
  }
`

const Types = styled.div`
  display: flex;
  margin-bottom: 56px;
`

const Type = styled.div`
  margin: 0 32px;
  display: flex;
  flex-direction: column;

  &:nth-of-type(1){
    margin-left: 0;
  }
  &:nth-last-of-type(1){
    margin-right: 0;
  }
`
const Label = styled.label`
  color: ${colors.gray[400]};
  ${typography.styles.textSm}
  ${typography.weights.regular}
`

const TypeContent = styled.span`
  color: ${props => props.theme.isLightMode ? colors.gray[900] : colors.gray[25]};
  ${typography.styles.textLg}
  ${typography.weights.semibold}
`

const Header = styled.div`
  text-align: center;
  background-color: #f4f8ff;
  padding: 96px 0;
`
const Title = styled.h1`
  ${typography.styles.displayLg}
  ${typography.weights.semibold}
`

export { Details }
