import React from 'react';

interface ControlProps {
  iconName: string;
  onClick: () => void;
}

const Control: React.FC<ControlProps> = ({ iconName, onClick }): JSX.Element => {
  return (
    <li className="inline-block px-1">
      <button className="pagination-item" onClick={onClick}>
        <span className="material-icons">{iconName}</span>
      </button>
    </li>
  );
};

export default Control;
