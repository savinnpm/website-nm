import { RadioGroup } from '@headlessui/react'
import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../../styles/colors'
import { shadows } from '../../../../../styles/shadows'
import { typography } from '../../../../../styles/typography'
import { utils } from '../../../../../styles/utils'

export const RadioGroupFilter = ({ options, selectedOption, setSelectedOption, label, defaultOption, getOptionText = (x) => x }) => {
  return (
    <Container value={selectedOption} onChange={setSelectedOption}>
      <RadioGroupLabel>{label}</RadioGroupLabel>
      {options.map(option => {
        return (
          <RadioGroupOption key={option} value={option}>
            <span>{getOptionText(option) || defaultOption}</span>
          </RadioGroupOption>
        )
      })}
    </Container>
  )
}

const Container = styled(RadioGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const RadioGroupLabel = styled(RadioGroup.Label)`
  ${utils.srOnly};
`

const RadioGroupOption = styled(RadioGroup.Option)`
  display: inline-flex;
  padding: 8px 12px;
  color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['200']};
  border-radius: 6px;
  ${typography.styles.textSm};
  ${typography.weights.semibold};

  &:hover, &[aria-checked="true"] {
    color: ${props => props.theme.isLightMode ? colors[primaryColorKey]['700'] : colors.gray['200']};
    background: ${props => props.theme.isLightMode ? colors[primaryColorKey]['50'] : colors.gray['200']};
  }

  &:focus {
    color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['200']};
    background: ${props => props.theme.isLightMode ? colors.white : colors.gray['200']};
    box-shadow: ${shadows.xs},
        0px 0px 0px 4px ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['100'] : colors[primaryColorKey]['800']};
  }

  cursor: pointer;
`
