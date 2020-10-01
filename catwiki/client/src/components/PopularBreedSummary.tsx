import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchPopularBreeds, IPopularBreed } from '../api/breedApiService';
import PopularBreedCard from './PopularBreedCard';

const PopularBreedSummary: React.FC = (): JSX.Element => {
  const [popularBreeds, setPopularBreeds] = useState<IPopularBreed[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetchPopularBreeds();
        setPopularBreeds(res.data.slice(0, 4));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, []);

  const renderPopularBreedCards = () => {
    if (loading) {
      return <p className="text-sm">Loading...</p>;
    }

    if (!loading && popularBreeds.length === 0) {
      return <div>No popular breeds available</div>;
    }

    return popularBreeds.map((item) => <PopularBreedCard breed={item} key={item._id} />);
  };

  return (
    <section className="bg-westar px-10 md:px-24 py-5 md:py-10 popular-breed-summary">
      <h1 className="font-medium text-cannon-black text-sm leading-4 md:text-lg md:leading-5 relative mb-8 md:mb-10">
        Most Searched Breeds
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 md:mb-10">
        <h2 className="text-cannon-black font-bold text-lg leading-5 md:text-5xl mb-4 md:mb-0">
          66+ Breeds For you to discover
        </h2>
        <Link
          to="/breeds/popular"
          className="font-bold text-sm leading-4 md:text-base md:leading-5 see-more"
        >
          <span className="uppercase">See More</span>
          <span className="material-icons ml-2">trending_flat</span>
        </Link>
      </div>

      <div className="mb-6 md:mb-8 popular-breeds">{renderPopularBreedCards()}</div>
    </section>
  );
};

export default PopularBreedSummary;
