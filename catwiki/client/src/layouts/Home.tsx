import React from 'react';

import Banner from '../components/Banner';
import PopularBreedSummary from '../components/PopularBreedSummary';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Banner />
      <PopularBreedSummary />
    </>
  );
};

export default Home;
