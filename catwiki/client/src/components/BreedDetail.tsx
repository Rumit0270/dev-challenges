import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IBreedDetail } from '../api/breedApiService';
import Score from './Score';

interface BreedDetailProps {
  breed: IBreedDetail;
}

const BreedDetail: React.FC<BreedDetailProps> = ({ breed }): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row mb-8 md:mb-16 items-stretch md:items-start breed-detail">
      {breed.imageUrl ? (
        <figure className="relative mb-5 md:mb-0 md:mr-24 breed-detail__image-wrapper">
          <LazyLoadImage
            src={breed.imageUrl}
            alt={breed.name}
            effect="blur"
            className="breed-detail__image"
          />
        </figure>
      ) : null}
      <div className="flex-1">
        <h2 className="text-cannon-black font-semibold text-2xl leading-8 md:text-4xl md:leading-9 mb-4 md:mb-8">
          {breed.name}
        </h2>
        <p className="text-canon-black font-medium text-sm leading-6 md:text-base md:leading-7 mb-4 md:mb-6 pr-10 md:pr-12">
          {breed.description}
        </p>
        <div className="flex flex-col md:flex-row mb-3 md:mb-6">
          <span className="text-sm md:text-base font-bold leading-6 mr-2">Temperament:</span>
          <span className="text-sm md:text-base font-medium leading-6">{breed.temperament}</span>
        </div>
        <div className="flex mb-3 md:mb-6">
          <span className="text-sm md:text-base font-bold leading-6 mr-2">Origin:</span>
          <span className="text-sm md:text-base font-medium leading-6">{breed.origin}</span>
        </div>
        <div className="flex mb-3 md:mb-6">
          <span className="text-sm md:text-base font-bold leading-6 mr-2">Life Span:</span>
          <span className="text-sm md:text-base font-medium leading-6">
            {breed.life_span} years
          </span>
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Adaptability:
          </span>
          <Score current={breed.adaptability} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Affection Level:
          </span>
          <Score current={breed.affection_level} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Child Friendly:
          </span>
          <Score current={breed.child_friendly} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Grooming:
          </span>
          <Score current={breed.grooming} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Intelligence:
          </span>
          <Score current={breed.intelligence} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Health issues:
          </span>
          <Score current={breed.health_issues} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Social needs:
          </span>
          <Score current={breed.social_needs} />
        </div>
        <div className="flex flex-col md:flex-row mb-4 md:mb-6 md:items-center">
          <span className="text-sm md:text-base font-bold leading-6 mr-2 mb-2 md:mb-0 breed-detail__label">
            Stranger friendly:
          </span>
          <Score current={breed.stranger_friendly} />
        </div>
      </div>
    </section>
  );
};

export default BreedDetail;
