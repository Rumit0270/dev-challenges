import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface BreedImagesProps {
  images: string[];
}

const BreedImages: React.FC<BreedImagesProps> = ({ images }): JSX.Element => {
  const renderImages = () => {
    return images.map((image) => (
      <LazyLoadImage src={image} alt="cat" effect="blur" key={image} className="breed-image" />
    ));
  };

  return (
    <section className="mb-20 md:mb-40">
      <h2 className="font-semibold text-2xl leading-8 md:text-4xl md:leading-9 mb-4 md:mb-8">
        Other photos
      </h2>
      <div className="breed-images">{renderImages()}</div>
    </section>
  );
};

export default BreedImages;
