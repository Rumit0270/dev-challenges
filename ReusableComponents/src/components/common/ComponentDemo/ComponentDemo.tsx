import * as React from 'react';
import './ComponentDemo.scss';

interface ComponentDemoProps {
  jsx?: string;
  children?: JSX.Element;
}

const ComponentDemo: React.FC<ComponentDemoProps> = ({
  jsx = '',
  children,
}): JSX.Element => {
  return (
    <div className="component-demo-container">
      <h3 className="component-demo__title">{jsx}</h3>
      {children}
    </div>
  );
};

export default ComponentDemo;
