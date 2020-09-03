import React, { useState, useEffect } from 'react';
import '../assets/css/Main.css';
import { IImage } from '../api/imageService';

interface MainProps {
  images: IImage[];
  seachText: string;
}

const Main: React.FC<MainProps> = ({ images, seachText }): JSX.Element => {
  const [filteredImages, setFilteredImages] = useState<IImage[]>([]);

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

  return <main className="main-container">Main</main>;
};

export default Main;
