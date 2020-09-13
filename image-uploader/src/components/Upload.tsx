import React, { createRef } from 'react';

import '../assets/css/Upload.css';
import ImageDragDrop from './ImageDragDrop';
import { isValidImage } from '../utils/file';

interface UploadProps {
  onImageSelect: (image: File) => void;
}

const Upload: React.FC<UploadProps> = ({ onImageSelect }): JSX.Element => {
  const filePickerRef = createRef<HTMLInputElement>();

  const onImageDrop = (file: File) => {
    onImageSelect(file);
  };

  const onChooseFileClick = () => {
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length <= 0) {
      return;
    }

    const selectedFile = e.target.files[0];
    const isValid = isValidImage(selectedFile);

    if (!isValid) {
      alert('Please select a valid image.');
      return;
    }

    onImageSelect(selectedFile);
  };

  return (
    <div className="upload">
      <h3 className="upload__title">Upload your image</h3>
      <span className="upload__description">File should be Jpeg, Png,...</span>
      <ImageDragDrop onImageDrop={onImageDrop} />
      <span className="upload__option-text">Or</span>
      <input
        type="file"
        accept="image/*"
        ref={filePickerRef}
        className="upload__file-picker"
        onChange={onFileChange}
      />
      <button className="button" onClick={onChooseFileClick}>
        Choose a file
      </button>
    </div>
  );
};

export default Upload;
