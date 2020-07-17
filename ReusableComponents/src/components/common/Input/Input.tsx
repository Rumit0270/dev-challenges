import * as React from 'react';

import './Input.scss';
import { ChangeEvent } from 'react';

type InputSize = 'sm' | 'md';

const inputSizeMap = {
  sm: 'input-small',
  md: '',
};

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string | null;
  startIcon?: string;
  endIcon?: string;
  inputSize?: InputSize;
  fullWidth?: boolean;
  multiline?: boolean;
  handleInputChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

type InputProps = IInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input: React.FC<InputProps> = ({
  label = 'Label',
  placeholder = 'Placeholder',
  error = false,
  disabled = false,
  helperText = null,
  startIcon = null,
  endIcon = null,
  inputSize = 'md',
  fullWidth = false,
  multiline = false,
  handleInputChange = () => {},
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

  const inputSizeClass = inputSizeMap[inputSize];
  const fullWidthClass = fullWidth ? 'width-100' : '';

  return (
    <div
      className={`input-container ${hasHelperText} ${hasStartIcon} ${hasEndIcon} ${fullWidthClass}`}
    >
      {iconStart}
      {multiline ? (
        <textarea
          className={`base-input-style ${errorClass} ${disabledClass} ${inputSizeClass} ${fullWidthClass}`}
          placeholder={placeholder}
          {...props}
          onChange={handleInputChange}
        ></textarea>
      ) : (
        <input
          type="text"
          className={`base-input-style ${errorClass} ${disabledClass} ${inputSizeClass} ${fullWidthClass}`}
          placeholder={placeholder}
          {...props}
          onChange={handleInputChange}
        />
      )}
      {iconEnd}
      <label className="input__label">{label}</label>
      {helperInputText}
    </div>
  );
};

export default Input;
