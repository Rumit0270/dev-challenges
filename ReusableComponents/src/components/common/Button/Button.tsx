import * as React from 'react';

import './Button.scss';

type ButtonVariant = 'default' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  variant?: ButtonVariant;
  disableShadow?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
  size?: ButtonSize;
  color?: ButtonColor;
}

const buttonVariantMap = {
  default: 'default-variant',
  outline: 'outline-variant',
  text: 'text-variant',
};

const buttonSizeMap = {
  sm: 'btn-small',
  md: 'btn-medium',
  lg: 'btn-large',
};

const buttonColorMap = {
  default: '',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  danger: 'btn-danger',
};

const Button: React.FC<ButtonProps> = ({
  title = 'Default',
  variant = 'default',
  disableShadow = false,
  startIcon = null,
  endIcon = null,
  size = 'md',
  color = 'default',
  ...props
}): JSX.Element => {
  const variantClass = buttonVariantMap[variant];
  const shadowClass = disableShadow ? 'disable-shadow__btn' : '';
  const titleText = props.disabled ? 'Disabled' : title;
  const iconStart = startIcon ? (
    <span className="material-icons btn-icon">{startIcon}</span>
  ) : null;

  const iconEnd = endIcon ? (
    <span className="material-icons btn-icon">{endIcon}</span>
  ) : null;

  const sizeClass = buttonSizeMap[size];
  const colorClass = buttonColorMap[color];

  return (
    <button
      className={`base-button-style ${variantClass} ${shadowClass} ${sizeClass} ${colorClass}`}
      {...props}
    >
      {iconStart}
      {titleText}
      {iconEnd}
    </button>
  );
};

export default Button;
