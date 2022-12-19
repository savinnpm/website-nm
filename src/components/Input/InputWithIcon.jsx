import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../styles/colors'
import { shadows } from '../../../styles/shadows'
import { typography } from '../../../styles/typography'
import { Icon } from '../Icon'

const InputWithIcon = ({ placeholder, iconProps = {}, containerClassName = '', ...props }) => {
  return (
    <Container className={containerClassName}>
      {Object.keys(iconProps).length > 0 && <Icon {...iconProps} />}
      <StyledInput placeholder={placeholder} autoComplete='off' {...props} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.primaryBackgroundColor};
  border: 1px solid ${props => props.theme.isLightMode ? colors.gray['300'] : colors.gray['500']};
  box-shadow: ${shadows.xs};
  border-radius: 8px;  
  gap: 8px;
  padding: 10px;
  align-items: center;

  ${typography.weights.medium}
  ${typography.styles.textSm}

  svg {
    flex-grow: 1;
  }

  &:not(&:disabled) {
    &[data-state="hover"], :hover {
    }
    
    &[data-state="focussed"],
    :focus,
    :active,
    :focus-visible,
    :focus-within {

      outline: none;
      box-shadow: ${shadows.xs},
        0px 0px 0px 4px ${(props) => props.theme.isLightMode ? colors[primaryColorKey]['100'] : colors[primaryColorKey]['800']};
    }
  }
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 2;
  width: 80%;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['300']};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['300']};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${props => props.theme.isLightMode ? colors.gray['500'] : colors.gray['300']};
  }
`
export { InputWithIcon }
