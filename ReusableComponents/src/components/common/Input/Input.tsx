import * as React from 'react';

import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string | null;
  startIcon?: string;
  endIcon?: string;
}

const Input: React.FC<InputProps> = ({
  label = 'Label',
  placeholder = 'Placeholder',
  error = false,
  disabled = false,
  helperText = null,
  startIcon = null,
  endIcon = null,
  ...props
}): JSX.Element => {
  const errorClass = error ? 'input--error' : '';
  const disabledClass = disabled ? 'input--disabled' : '';
  const helperInputText = helperText ? (
    <span className="helper-text">{helperText}</span>
  ) : null;

  const hasHelperText = helperText ? 'has-helper' : '';
  const hasStartIcon = startIcon ? 'has-start-icon' : '';
  const hasEndIcon = endIcon ? 'has-end-icon' : '';

  const iconStart = startIcon ? (
    <span className="material-icons input-icon">{startIcon}</span>
  ) : null;

  const iconEnd = endIcon ? (
    <span className="material-icons input-icon">{endIcon}</span>
  ) : null;

  return (
    <div
      className={`input-container ${hasHelperText} ${hasStartIcon} ${hasEndIcon}`}
    >
      {iconStart}
      <input
        type="text"
        className={`base-input-style ${errorClass} ${disabledClass}`}
        placeholder={placeholder}
        {...props}
      />
      {iconEnd}
      <label className="input__label">{label}</label>
      {helperInputText}
    </div>
  );
};

export default Input;
