import * as React from 'react';

import '../../assets/css/Input.css';

type InputSize = 'sm' | 'md';

const inputSizeMap = {
  sm: 'input-small',
  md: '',
};

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string | null;
  startIcon?: string;
  endIcon?: string;
  inputSize?: InputSize;
  className?: string;
}

type InputProps = IInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  error = false,
  helperText = null,
  startIcon = null,
  endIcon = null,
  inputSize = 'md',
  className = '',
  ...props
}): JSX.Element => {
  const errorClass = error ? 'input--error' : '';
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

  const inputSizeClass = inputSizeMap[inputSize];

  return (
    <div
      className={`input-container ${hasHelperText} ${hasStartIcon} ${hasEndIcon}`}
    >
      <div className="input-group">
        {iconStart}
        <input
          type="text"
          className={`base-input-style ${errorClass} ${inputSizeClass} ${className}`}
          placeholder={placeholder}
          {...props}
        />
        {iconEnd}
      </div>
      {label ? <label className="input__label">{label}</label> : null}
      {helperInputText}
    </div>
  );
};

export default Input;
