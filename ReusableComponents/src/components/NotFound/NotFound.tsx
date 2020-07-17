import * as React from 'react';
import './NotFound.scss';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Not Found</h2>
      <p className="not-found__description">
        The requested link might not yet be implemented or the entered URL is
        incorrect.
      </p>
    </div>
  );
};

export default NotFound;
