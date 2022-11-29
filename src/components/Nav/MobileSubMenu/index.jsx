import { Disclosure } from '@headlessui/react'
import { useState } from "react"
import styled from "styled-components"

import { colors } from "../../../../styles/colors"
import { constants } from "../../../../styles/constants"
import { typography } from "../../../../styles/typography"
import { Icon } from "../../Icon"
import { Content } from './Content'

export const MobileSubMenu = ({ item }) => {

  return (
    <Disclosure>
      {({ open }) => (
        <Container>
          <SubmenuTriggerContainer>
            <Title>{item.title}</Title>
            <Icon size={20} variant={open ? 'placeholder' : 'sun'} />
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
  color: ${props => props.theme.isLightMode ? colors.gray['900'] : colors.gray['900']};
  text-align: left;

  ${typography.styles.textMd};
  ${typography.weights.semibold};

  :hover {
    background-color: ${props => props.theme.isLightMode ? colors.gray['50'] : colors.gray['50']};
  }
`

const Title = styled.div`
  flex: 1;
`