import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { Icon } from '../../Icon'
import { gap } from './gap'
import { iconSize } from './iconSize'
import { textStyle } from './textStyle'

const getColor = () => {
  return (props) => props.theme.isLightMode ? colors.gray[600] : colors.gray[25]
}

export const LinkGrayButton = ({
  size,
  icon = 'default',
  iconLeading,
  iconTrailing,
  iconVariant,
  state,
  disabled,
  children,
  link,
  ...rest
}) => {
  return (
    <StyledButton
      icon={icon}
      size={size}
      disabled={disabled || state === 'disabled'}
      data-state={state}
      as={link ? 'a' : undefined}
      {...rest}
    >
      {iconLeading && <Icon variant={iconVariant} />}
      {children}
      {iconTrailing && <Icon variant={iconVariant} />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  --color: ${getColor()};

  cursor:pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${gap};
  ${iconSize};
  ${textStyle};

  color: var(--color);
  background-color: transparent;
  border-radius: 8px;

  &:disabled {
    color: ${(props) => props.theme.isLightMode ? colors.gray[300] : colors.gray[600]};
    cursor: not-allowed;
  }

  &:not(&:disabled) {
    &[data-state="hover"], :hover {
      color: ${(props) => props.theme.isLightMode ? colors.gray[700] : colors.gray[300]};
    }

    &[data-state="focussed"],
    :focus,
    :active,
    :focus-visible {
      color: var(--color);
      outline: none;
    }
  }
`
