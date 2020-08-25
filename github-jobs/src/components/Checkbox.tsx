import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelStyle?: string;
  inputStyle?: string;
  containerStyle?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  labelText = '',
  inputStyle = '',
  labelStyle = '',
  containerStyle = '',
  ...props
}): JSX.Element => {
  return (
    <div className={`font-poppins flex items-center ${containerStyle}`}>
      <input type="checkbox" className={`w-4 h-4 mr-2 ${inputStyle}`} {...props} />
      <label className={`font-medium text-sm leading-5 text-chambray ${labelStyle}`}>
        {labelText}
      </label>
    </div>
  );
};

export default Checkbox;
