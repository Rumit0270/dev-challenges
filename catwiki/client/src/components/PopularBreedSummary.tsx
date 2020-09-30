import React from 'react';
import { Link } from 'react-router-dom';

const PopularBreedSummary: React.FC = (): JSX.Element => {
  return (
    <section className="bg-westar px-10 md:px-24 py-5 md:py-10 popular-breed-summary">
      <h1 className="font-medium text-cannon-black text-sm leading-4 md:text-lg md:leading-5 relative mb-8 md:mb-10">
        Most Searched Breeds
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 md:mb-10">
        <h2 className="text-cannon-black font-bold text-lg leading-5 md:text-5xl mb-3 md:mb-0">
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
    </section>
  );
};

export default PopularBreedSummary;
