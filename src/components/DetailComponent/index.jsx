import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { typography } from '../../../styles/typography'
import { utils } from '../../../styles/utils'
import { Content } from '../../views/BlogPostDetail/Content'
import { TableOfContents } from '../BlogDetails/TableOfContents'
import { Breadcrumbs } from '../Breadcrumbs'
import { Shareit } from '../Shareit'

export const DetailComponent = ({ title, intro, html, wrapperClass, breadcrumbs }) => {
  return (
    <MainWrapper>
      <Sidebar>
        <TableOfContents title={title} wrapperClass={wrapperClass} />
      </Sidebar>

      <ContentWrapper>
        <Breadcrumbs className='breadcrumb-wrapper' crumbs={breadcrumbs} />

        <Content
          content={html}
          wrapperClass={wrapperClass}
        />

        <Shareit title={title} intro={(intro || '').substr(0, 100)} />
      </ContentWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  ${utils.fullWidthContainer};
  padding-left: 86px;
  padding-right: 86px;
  word-break: break-word;

  padding-top: 56px;
  padding-bottom: 96px;


  display: grid;
  gap: 64px;
  grid-template-columns: 4fr 9fr;

  @media (max-width: 934px) {
    grid-template-columns: 1fr;
    
    ${utils.fullWidthContainer};
  }
`

const Sidebar = styled.div`
  border-right: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};

  @media (max-width: 933px) {
    display: none;
  }
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
    color: ${props => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]};
    ${typography.weights.regular}
    ${typography.styles.textLg}
  }

  li {
    line-height: 28px;
  }
  
  h2 {
    ${typography.styles.displayXs}
    margin-bottom: 12px;
  }
  
  .btn-application {
    display: flex;
    margin-top: 56px;
    justify-content: center;

    @media (min-width: 770px) {
      justify-content: start;
    }
  }

  #about-this-vacancy  {
    position: relative;
    text-align: center;

    label {
      background-color: ${props => props.theme.isLightMode ? colors.white : colors.gray[800]};;
      padding: 0 24px;
      ${typography.weights.semibold}
      ${typography.styles.textXl}
    }

    span {
      border-top: 1px solid ${props => props.theme.isLightMode ? colors.gray[200] : colors.gray[700]};
      display: block;
      width: 100%;
      position: absolute;
      top: 50%;
      z-index: -1;
    }
  }

  .breadcrumb-wrapper {
    margin-bottom: 32px;
  }
`
