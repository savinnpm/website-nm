import styled from 'styled-components'
import { colors, primaryColorKey } from '../../../../styles/colors'
import { Icon } from '../../Icon'
import { gap } from './gap'
import { iconSize } from './iconSize'
import { textStyle } from './textStyle'

const getBgColor = (destructive) => {
  return destructive ? colors.error : colors[primaryColorKey]
}

export const LinkColor = ({
  size,
  icon = 'default',
  iconLeading,
  iconTrailing,
  iconVariant,
  destructive,
  state,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      icon={icon}
      size={size}
      disabled={disabled || state === 'disabled'}
      data-state={state}
      destructive={destructive}
      {...rest}
    >
      {iconLeading && <Icon variant={iconVariant} />}
      {children}
      {iconTrailing && <Icon variant={iconVariant} />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  --color: ${(props) => getBgColor(props.destructive)['600']};

  display: flex;
  justify-content: center;
  align-items: center;
  ${gap};
  ${iconSize};
  ${textStyle};

  color: var(--color);
  border-radius: 8px;

  &:disabled {
    --color: ${(props) => getBgColor(props.destructive)['200']};
  }

  &:not(&:disabled) {
    &[data-state="hover"], :hover {
      --color: ${(props) => getBgColor(props.destructive)['700']};
    }

    &[data-state="focussed"],
    :focus,
    :active,
    :focus-visible {
      --color: ${(props) => getBgColor(props.destructive)['600']};

      outline: none;
    }
  }
`
