import * as React from 'react';

import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string | null;
}

const Input: React.FC<InputProps> = ({
  label = 'Label',
  placeholder = 'Placeholder',
  error = false,
  disabled = false,
  helperText = null,
  ...props
}): JSX.Element => {
  const errorClass = error ? 'input--error' : '';
  const disabledClass = disabled ? 'input--disabled' : '';
  const helperInputText = helperText ? (
    <span className="helper-text">{helperText}</span>
  ) : null;

  return (
    <div className="input-container">
      <input
        type="text"
        className={`base-input-style ${errorClass} ${disabledClass}`}
        placeholder={placeholder}
        {...props}
      />
      <label className="input__label">{label}</label>
      {helperInputText}
    </div>
  );
};

export default Input;
