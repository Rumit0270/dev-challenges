import * as React from 'react';
import './ButtonDemo.scss';

interface ButtonDemoProps {
  jsx?: string;
  children?: JSX.Element;
}

const ButtonDemo: React.FC<ButtonDemoProps> = ({
  jsx = '',
  children,
}): JSX.Element => {
  return (
    <div className="button-demo-container">
      <h3 className="button-demo__title">{jsx}</h3>
      {children}
    </div>
  );
};

export default ButtonDemo;
