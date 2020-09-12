import React from 'react';

import '../assets/css/Upload.css';
import ImageDragDrop from './ImageDragDrop';

const Upload: React.FC = (): JSX.Element => {
  return (
    <div className="upload">
      <h3 className="upload__title">Upload your image</h3>
      <span className="upload__description">File should be Jpeg, Png,...</span>
      <ImageDragDrop />
      <span className="upload__option-text">Or</span>
      <button className="button">Choose a file</button>
    </div>
  );
};

export default Upload;
