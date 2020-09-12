import React, { DragEvent, useState } from 'react';

import '../assets/css/ImageDragDrop.css';
import dragDropImg from '../assets/images/image.svg';
import { isValidImage } from '../utils/file';

interface ImageDragDropProps {
  onImageDrop: (file: File) => void;
}

const ImageDragDrop: React.FC<ImageDragDropProps> = ({
  onImageDrop,
}): JSX.Element => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const dragOverClass = isDragOver ? 'drag-drop--focused' : '';

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (!files.length || files.length <= 0) {
      return;
    }

    const uploadImage = files[0];
    const isValid = isValidImage(uploadImage);

    if (!isValid) {
      alert('Please select a valid image.');
      setIsDragOver(false);
      return;
    }

    onImageDrop(uploadImage);
  };

  return (
    <div className="image-drag-drop">
      <img src={dragDropImg} alt="Drag drop" />

      <p>Drag & Drop your image here</p>
      <div
        className={`drag-drop ${dragOverClass}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleFileDrop}
      ></div>
    </div>
  );
};

export default ImageDragDrop;
