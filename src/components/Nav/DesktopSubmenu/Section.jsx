import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { DesktopNavMenuItemLink } from './Link'

export const Section = ({ section }) => {
  const { t } = useTranslation("common")

  if (!section.links) {
    return (
      <div>
        <Title>{t(section.title)}</Title>
        <Content>
          Youtube videos
        </Content>
      </div>
    )
  }

  return (
    <div>
      <Title>{t(section.title)}</Title>
      <Content>
        {section.links.map((link, idx) => {
          return (
            <DesktopNavMenuItemLink key={idx} item={link} />
          )
        })}
      </Content>
    </div>
  )
}

const Title = styled.h4`
  color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['600'] : colors[primaryColorKey]['500']};

  ${typography.styles.textSm};
  ${typography.weights.semibold};
`

const Content = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
