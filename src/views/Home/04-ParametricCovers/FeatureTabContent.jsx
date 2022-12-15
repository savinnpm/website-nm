import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { FeaturedIcon } from '../../../components/FeaturedIcon'

export const FeatureTabContent = ({ icon, title, text }) => {
  return (
    <>
      <FeaturedIcon variant={icon} size='sm' />
      <Heading>{title}</Heading>
      <Content>{text}</Content>
    </>
  )
}

const Heading = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.color};
  ${typography.styles.textXl}
  ${typography.weights.semibold}
`

const Content = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.isLightMode ? colors.gray['600'] : colors.gray['300']};

  ${typography.styles.textMd}
  ${typography.weights.regular}
`
