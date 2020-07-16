import * as React from 'react';

import './Button.scss';

type ButtonVariant = 'default' | 'outline' | 'text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  variant?: ButtonVariant;
}

const buttonVariantMap = {
  default: 'default-variant',
  outline: 'outline-variant',
  text: 'text-variant',
};

const Button: React.FC<ButtonProps> = ({
  title = 'Default',
  variant = 'default',
  ...props
}): JSX.Element => {
  const variantClass = buttonVariantMap[variant];

  return (
    <button className={`${variantClass}`} {...props}>
      {title}
    </button>
  );
};

export default Button;
