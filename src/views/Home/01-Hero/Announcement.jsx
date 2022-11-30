import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { utils } from '../../../../styles/utils'
import { Icon } from '../../../components/Icon'

export const Announcement = () => {
  const { t } = useTranslation('home')
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <StyledLink href='http://example.com/' target='_blank'>
      <Category>{t('PRESS_ROOM')}</Category>
      <Text>
        <span>{t('ANNOUNCEMENT')}</span>
        <Icon size={16} variant='arrow-right' />
      </Text>
    </StyledLink>
  )
}

const StyledLink = styled.a`
  max-width: 100%;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px 4px 4px;
  gap: 12px;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.isLightMode
      ? colors[primaryColorKey]['50']
      : colors.gray['600']};

  ${typography.styles.textSm};
  ${typography.weights.medium};
`

const Category = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 10px;
  border-radius: 9999px;
  color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors.white};
  background-color: ${(props) => props.theme.isLightMode ? colors.white : colors.gray['700']};
`

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  color: ${(props) => props.theme.isLightMode
      ? colors[primaryColorKey]['700']
      : colors.gray['25']};

  flex: 1;
  min-width: 0;

  > span {
    ${utils.ellipsis};
  }

  svg {
    flex-shrink: 0;
    color: ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['500'] : colors.white};
  }
`
