import React from 'react';

import '../assets/css/ImageDragDrop.css';
import dragDropImg from '../assets/images/image.svg';

const ImageDragDrop: React.FC = (): JSX.Element => {
  return (
    <div className="image-drag-drop">
      <img src={dragDropImg} alt="Drag drop" />

      <p>Drag & Drop your image here</p>
    </div>
  );
};

export default ImageDragDrop;
