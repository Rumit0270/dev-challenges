import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { fetchPopularBreeds, IPopularBreed } from '../api/breedApiService';

const MostSearchedBreed: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [mostSearchedBreeds, setMostSearchedBreeds] = useState<IPopularBreed[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchPopularBreeds();
        setMostSearchedBreeds(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setMostSearchedBreeds([]);
      }
    })();
  }, []);

  const renderMostSearchedBreeds = () => {
    return mostSearchedBreeds.map((breed, index) => (
      <div key={breed.breedId} className="flex flex-col md:flex-row mb-10 md:mb-16">
        <Link to={`/breeds/${breed.name}`}>
          <LazyLoadImage
            src={breed.imageUrl}
            alt={breed.name}
            effect="blur"
            className="md:mr-16 mb-4 md:mb-0 most-searched-breed__img"
          />
        </Link>
        <div className="flex-1 text-cannon-black">
          <h3 className="font-semibold text-xl md:text-2xl leading-5 md:leading-6 mb-3 md:mb-6">
            {index + 1}. {breed.name}
          </h3>
          <p className="font-medium text-base md:text-lg leading-6 md:leading-7 pr-8 md:pr-12">
            {breed.description}
          </p>
        </div>
      </div>
    ));
  };

  if (loading) {
    return <section className="w-full flex justify-center items-center">Loading...</section>;
  }

  if (mostSearchedBreeds.length === 0) {
    return (
      <section className="w-full flex justify-center items-center">
        Oops! No data to display :(
      </section>
    );
  }

  return (
    <section className="mb-12 md:mb-32">
      <h2 className="font-bold text-2xl leading-8 md:text-3xl md:leading-9 mb-8 md:mb-12">
        Top 10 most searched breeds
      </h2>
      <div>{renderMostSearchedBreeds()}</div>
    </section>
  );
};

export default MostSearchedBreed;
