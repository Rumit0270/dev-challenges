import React from 'react';

import '../assets/css/Uploading.css';

const Uploading: React.FC = (): JSX.Element => {
  return (
    <div className="uploading">
      <h3 className="uploading__title">Uploading...</h3>
      <div className="progress">
        <span className="progress__indicator"></span>
      </div>
    </div>
  );
};

export default Uploading;
