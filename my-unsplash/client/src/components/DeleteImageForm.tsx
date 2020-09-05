import React, { useState } from 'react';
import '../assets/css/DeleteImageForm.css';
import Input from './Input';
import Button from './Button';
import { IImage } from '../api/imageService';

interface DeleteImageFormProps {
  onCancel: () => void;
  onDelete: (image: IImage) => void;
  image: IImage | null;
}

const DeleteImageForm: React.FC<DeleteImageFormProps> = ({
  onCancel,
  onDelete,
  image,
}): JSX.Element => {
  const [imageLabel, setImageLabel] = useState<string>('');

  const isFormValid = (): boolean => {
    if (!image) {
      return false;
    }
    return image.label === imageLabel;
  };

  const handleSubmit = () => {
    if (image) {
      onDelete(image);
    }
  };

  return (
    <div className="delete-image-container">
      <h2 className="delete-image__title">Are you sure?</h2>

      <Input
        label="Enter image label to confirm"
        placeholder={image ? image.label : 'Image label'}
        containerClassName="delete-image-input-container"
        className="delete-image__input"
        value={imageLabel}
        onChange={(e: any) => setImageLabel(e.target.value)}
      />

      <div className="delete-image__controls">
        <Button
          className="delete-image__control"
          title="Cancel"
          variant="text"
          onClick={onCancel}
        />
        <Button
          className="delete-image__control"
          title="Submit"
          color="danger"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default DeleteImageForm;
