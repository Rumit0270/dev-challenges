import React, { useState } from 'react';
import '../assets/css/AddImageForm.css';
import Input from './Input';
import Button from './Button';
import { IImage } from '../api/imageService';

const imageUrlRegex = RegExp(
  '^(https://images.unsplash.com/photo-)([0-9])*-([0-9a-zA-Z])*?.*'
);
interface AddImageFormProps {
  onCancel: () => void;
  onSubmit: (image: IImage) => void;
}

const AddImageForm: React.FC<AddImageFormProps> = ({
  onCancel,
  onSubmit,
}): JSX.Element => {
  const [imageLabel, setImageLabel] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const isFormValid = (): boolean => {
    return (
      imageLabel.length > 0 &&
      imageUrl.length > 0 &&
      imageUrlRegex.test(imageUrl)
    );
  };

  const handleSubmit = () => {
    let image: IImage = {
      label: imageLabel,
      imageUrl,
    };

    onSubmit(image);
  };

  return (
    <div className="add-image-container">
      <h2 className="add-image__title">Add a new photo</h2>

      <Input
        label="Label"
        placeholder="Suspendisse elit massa"
        containerClassName="add-image-input-container"
        className="add-image__input"
        value={imageLabel}
        onChange={(e: any) => setImageLabel(e.target.value)}
      />

      <Input
        label="Photo URL"
        placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
        containerClassName="add-image-input-container"
        className="add-image__input"
        value={imageUrl}
        onChange={(e: any) => setImageUrl(e.target.value)}
        helperText="Please enter a valid unsplash image URL. Other image URLs are not supported for now."
      />

      <div className="add-image__controls">
        <Button
          className="add-image__control"
          title="Cancel"
          variant="text"
          onClick={onCancel}
        />
        <Button
          className="add-image__control"
          title="Submit"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddImageForm;
