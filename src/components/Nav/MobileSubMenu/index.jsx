import { Disclosure } from '@headlessui/react'
import styled from 'styled-components'

import { colors } from '../../../../styles/colors'
import { typography } from '../../../../styles/typography'
import { Icon } from '../../Icon'
import { Content } from './Content'

export const MobileSubMenu = ({ item }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <Container>
          <SubmenuTriggerContainer>
            <Title>{item.title}</Title>
            <Icon size={20} variant={open ? 'chevron-up' : 'chevron-down'} />
          </SubmenuTriggerContainer>
          <Disclosure.Panel>
            <Content item={item} />
          </Disclosure.Panel>
        </Container>
      )}
    </Disclosure>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const SubmenuTriggerContainer = styled(Disclosure.Button)`
  display: flex;
  padding: 12px 16px;
  gap: 16px;
  color: ${props => props.theme.color};
  text-align: left;

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['700']};
  }
`

const Title = styled.div`
  flex: 1;
`
