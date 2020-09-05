import React from 'react';
import '../assets/css/Modal.css';

interface ModalProps {
  show: boolean;
  as: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ show, as }): JSX.Element => {
  const backdropClass = show ? 'backdrop--show' : '';
  const modalContainerClass = show ? 'modal-container--show' : '';

  return (
    <>
      <div className={`backdrop ${backdropClass}`}></div>
      <div className={`modal-container ${modalContainerClass}`}>
        {show ? as : null}
      </div>
    </>
  );
};

export default Modal;
