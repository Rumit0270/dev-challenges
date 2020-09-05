import React from 'react';

import '../assets/css/Button.css';

type ButtonVariant = 'default' | 'text';
type ButtonColor = 'success' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
}

const variantClassMap = {
  default: '',
  text: 'btn--text',
};

const colorClassMap = {
  success: 'btn--success',
  danger: 'btn--danger',
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'default',
  color = 'success',
  className = '',
  ...props
}): JSX.Element => {
  const colorClass = colorClassMap[color];
  const variantClass = variantClassMap[variant];

  return (
    <button
      className={`btn ${colorClass} ${variantClass} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
