import React, { useState, useEffect, useContext } from 'react';
import '../assets/css/Main.css';
import { IImage } from '../api/imageService';
import Modal from '../components/Modal';
import DeleteImageForm from '../components/DeleteImageForm';
import { ImageContext } from '../context';

interface MainProps {
  images: IImage[];
  seachText: string;
  loading: boolean;
}

const Main: React.FC<MainProps> = ({
  images,
  seachText,
  loading,
}): JSX.Element => {
  const { removeImage } = useContext(ImageContext);
  const [filteredImages, setFilteredImages] = useState<IImage[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [deleteImage, setDeleteImage] = useState<IImage | null>(null);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onImageDelete = (image: IImage) => {
    if (image.id) {
      removeImage(image.id);
    }

    setShowModal(false);
  };

  const onImageDeleteClick = (image: IImage) => {
    setDeleteImage(image);
    setShowModal(true);
  };

  useEffect(() => {
    if (seachText === '') {
      setFilteredImages(images);
      return;
    }

    const filteredImages = images.filter((image) =>
      image.label.toLowerCase().includes(seachText.toLowerCase())
    );
    setFilteredImages(filteredImages);
  }, [images, seachText]);

  if (loading) {
    return <div className="main-container">loading</div>;
  }

  return (
    <>
      <main className="main-container">
        {filteredImages.map((image) => (
          <button key={image.label} onClick={() => onImageDeleteClick(image)}>
            {image.label}
          </button>
        ))}
      </main>
      <Modal
        show={showModal}
        as={
          <DeleteImageForm
            onCancel={onCloseModal}
            onDelete={onImageDelete}
            image={deleteImage}
          />
        }
      />
    </>
  );
};

export default Main;
