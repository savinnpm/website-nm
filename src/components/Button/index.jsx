import { PrimaryButton } from "./PrimaryButton";

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
  link = false,
  ...rest
}) => {
  if (hierarchy == "primary") {
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
        link={link}
        {...rest}
      >
        {children}
      </PrimaryButton>
    );
  }

  return null;
};
