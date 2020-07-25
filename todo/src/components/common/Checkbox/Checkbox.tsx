import React from 'react';

import './Checkbox.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelStyle?: string;
  inputStyle?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  labelText = '',
  inputStyle = '',
  labelStyle = '',
  ...props
}): JSX.Element => {
  return (
    <label className={`checkbox-container ${labelStyle}`}>
      {labelText}
      <input type="checkbox" className={`${inputStyle}`} {...props} />
      <span className="checkmark__mark"></span>
    </label>
  );
};

export default Checkbox;
