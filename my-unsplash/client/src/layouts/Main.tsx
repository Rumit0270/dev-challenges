import React, { useState, useEffect, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../assets/css/Main.css';
import { IImage } from '../api/imageService';
import Modal from '../components/Modal';
import DeleteImageForm from '../components/DeleteImageForm';
import { ImageContext } from '../context';
import Loader from '../components/Loader';

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  850: 2,
  500: 1,
};

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
  const [showLightBox, setShowLightBox] = useState<boolean>(false);
  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number>(0);

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

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onImageDelete = (image: IImage) => {
    if (image.id) {
      removeImage(image.id);
    }

    setShowModal(false);
  };

  const onImageDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    image: IImage
  ) => {
    event.stopPropagation();
    setDeleteImage(image);
    setShowModal(true);
  };

  const openLightBox = (imageIndex: number) => {
    setLightBoxImageIndex(imageIndex);
    setShowLightBox(true);
  };

  const renderImages = () => {
    if (images.length <= 0) {
      return;
    }

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map((image, index) => {
          return (
            <figure
              className="unsplash-image-container"
              key={image.id ? image.id : image.imageUrl}
            >
              <LazyLoadImage
                src={image.imageUrl}
                alt={image.label}
                effect="blur"
                className="unsplash-image"
              />
              <div
                className="unsplash-image__content"
                onClick={() => openLightBox(index)}
              >
                <button
                  className="unsplash-image__action"
                  onClick={(event) => onImageDeleteClick(event, image)}
                >
                  delete
                </button>
                <figcaption className="unsplash-image__label">
                  {image.label}
                </figcaption>
              </div>
            </figure>
          );
        })}
      </Masonry>
    );
  };

  const renderLightbox = () => {
    if (!showLightBox || lightBoxImageIndex > filteredImages.length) {
      return null;
    }

    let currentImage = filteredImages[lightBoxImageIndex];
    let nextImage =
      filteredImages[(lightBoxImageIndex + 1) % filteredImages.length];
    let prevImage =
      filteredImages[
        (lightBoxImageIndex + filteredImages.length - 1) % filteredImages.length
      ];

    return (
      <Lightbox
        mainSrc={currentImage.imageUrl}
        nextSrc={nextImage.imageUrl}
        prevSrc={prevImage.imageUrl}
        onCloseRequest={() => setShowLightBox(false)}
        onMovePrevRequest={() =>
          setLightBoxImageIndex(
            (prevIndex) =>
              (prevIndex + filteredImages.length - 1) % filteredImages.length
          )
        }
        onMoveNextRequest={() =>
          setLightBoxImageIndex(
            () => (lightBoxImageIndex + 1) % filteredImages.length
          )
        }
        imageTitle={<h3>{currentImage.label}</h3>}
        imagePadding={60}
      />
    );
  };

  if (loading) {
    return (
      <div className="main-container flex-container">
        <Loader />
      </div>
    );
  }

  if (!loading && images.length === 0) {
    return (
      <div className="main-container flex-container">
        <p className="no-images-text">
          No images added yet. Added images will be shown here.
        </p>
      </div>
    );
  }

  if (!loading && filteredImages.length === 0) {
    return (
      <div className="main-container flex-container">
        <p className="no-images-text">
          Oops! Image not found. Please alter your search criteria and try
          again.
        </p>
      </div>
    );
  }

  return (
    <>
      <main className="main-container">
        {renderImages()}
        {renderLightbox()}
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
