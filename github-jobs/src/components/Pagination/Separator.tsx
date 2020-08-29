import React from 'react';

const Separator: React.FC = (): JSX.Element => {
  return (
    <li className="inline-flex items-center px-1 pagination-item__separator">
      <span className="material-icons">more_horiz</span>
    </li>
  );
};

export default Separator;
