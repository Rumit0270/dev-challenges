import React from 'react';

interface ButtonProps {
  pageNumber: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

const Button: React.FC<ButtonProps> = ({ pageNumber, isActive, onClick }): JSX.Element => {
  return (
    <li className="inline-block px-1">
      <button
        className={`pagination-item ${isActive ? 'pagination-item--active' : ''}`}
        onClick={() => onClick(pageNumber)}
      >
        {pageNumber}
      </button>
    </li>
  );
};

export default Button;
