import React from 'react';
import { CSSTransition } from 'react-transition-group';

import '../assets/css/FadeTransition.css';

interface FadeTransitionProps {
  children: any;
  inProp: boolean;
  appear?: boolean;
  timeout?: number;
  classNames?: string;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  appear = true,
  inProp,
  timeout = 500,
  classNames = 'fade',
}): JSX.Element => {
  return (
    <CSSTransition
      in={inProp}
      appear={appear}
      timeout={timeout}
      classNames={classNames}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeTransition;
