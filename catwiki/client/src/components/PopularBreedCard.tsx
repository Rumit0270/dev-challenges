import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { IPopularBreed } from '../api/breedApiService';

interface IPopularBreedCardProps {
  breed: IPopularBreed;
}

const PopularBreedCard: React.FC<IPopularBreedCardProps> = ({ breed }): JSX.Element => {
  return (
    <figure className="w-full relative cursor-pointer popular-breed">
      <LazyLoadImage
        src={breed.imageUrl}
        alt={breed.name}
        effect="blur"
        className="w-full mb-1 md:mb-2 popular-breed__img"
      />
      <figcaption className="text-cannon-black font-semibold text-sm leading-4 md:text-base md:leading-5">
        {breed.name}
      </figcaption>
    </figure>
  );
};

export default PopularBreedCard;
