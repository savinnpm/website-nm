import styled from 'styled-components'
import { colors } from '../../../../styles/colors'
import { shadows } from '../../../../styles/shadows'
import { Icon } from '../../Icon'
import { gap } from './gap'
import { iconSize } from './iconSize'
import { padding } from './padding'
import { textStyle } from './textStyle'

const getBgColor = (destructive) => {
  return destructive ? colors.error : colors.gray
}

export const SecondaryGrayButton = ({
  size,
  icon = 'default',
  iconLeading,
  iconTrailing,
  iconVariant,
  iconOnlyMobile,
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
      $iconOnlyMobile={iconOnlyMobile}
      {...rest}
    >
      {iconLeading && <Icon variant={iconVariant} />}
      {icon !== 'only' && <Content $iconOnlyMobile={iconOnlyMobile}>{children}</Content>}
      {iconTrailing && <Icon variant={iconVariant} />}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  --textColor: ${(props) => getBgColor(props.destructive)['700']};
  --borderColor: ${(props) => getBgColor(props.destructive)['300']};
  --backgroundColor: ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  ${gap};
  ${iconSize};
  ${textStyle};
  ${padding};
  cursor: pointer;

  color: var(--textColor);
  background-color: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  border-radius: 8px;
  box-shadow: ${shadows.xs};

  &:disabled {
    --textColor: ${(props) => getBgColor(props.destructive)['300']};
    --borderColor: ${(props) => getBgColor(props.destructive)['200']};
    cursor: not-allowed;
  }

  &:not(&:disabled) {
    &[data-state="hover"], :hover {
      --backgroundColor: ${(props) => getBgColor(props.destructive)['50']};
      --textColor: ${(props) => getBgColor(props.destructive)['800']};
    }

    &[data-state="focussed"],
    :focus,
    :active,
    :focus-visible {
      --borderColor: ${(props) => getBgColor(props.destructive)['200']};

      outline: none;
      box-shadow: ${shadows.xs},
        0px 0px 0px 4px ${(props) => props.theme.isLightMode ? getBgColor(props.destructive)['100'] : getBgColor(props.destructive)['800']};
    }
  }
`

const Content = styled.span`
  @media (max-width: 768px) {
    display: ${props => props.$iconOnlyMobile ? 'none' : 'inline'};
  }
`
