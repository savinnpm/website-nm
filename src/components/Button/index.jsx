import { LinkColor } from './LinkColor'
import { LinkGrayButton } from './LinkGrayButton'
import { PrimaryButton } from './PrimaryButton'

export const Button = ({
  size,
  hierarchy,
  icon,
  destructive,
  state,
  disabled,
  iconLeading,
  iconTrailing,
  iconVariant,
  children,
  ...rest
}) => {
  if (hierarchy === 'primary') {
    return (
      <PrimaryButton
        size={size}
        icon={icon}
        destructive={destructive}
        state={state}
        disabled={disabled}
        iconLeading={iconLeading}
        iconTrailing={iconTrailing}
        iconVariant={iconVariant}
        {...rest}
      >
        {children}
      </PrimaryButton>
    )
  }
  if (hierarchy === 'link-color') {
    return (
      <LinkColor
        size={size}
        icon={icon}
        destructive={destructive}
        state={state}
        disabled={disabled}
        iconLeading={iconLeading}
        iconTrailing={iconTrailing}
        iconVariant={iconVariant}
        {...rest}
      >
        {children}
      </LinkColor>
    )
  }

  if (hierarchy === 'link-gray') {
    return (
      <LinkGrayButton
        size={size}
        icon={icon}
        destructive={destructive}
        state={state}
        disabled={disabled}
        iconLeading={iconLeading}
        iconTrailing={iconTrailing}
        iconVariant={iconVariant}
        {...rest}
      >
        {children}
      </LinkGrayButton>
    )
  }

  return null
}
