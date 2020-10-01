import React from 'react';

import Banner from '../components/Banner';
import PopularBreedSummary from '../components/PopularBreedSummary';
import WhyToOwnCat from '../components/WhyToOwnCat';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Banner />
      <PopularBreedSummary />
      <WhyToOwnCat />
    </>
  );
};

export default Home;
