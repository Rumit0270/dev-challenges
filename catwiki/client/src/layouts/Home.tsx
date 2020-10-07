import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../components/Banner';
import PopularBreedSummary from '../components/PopularBreedSummary';
import WhyToOwnCat from '../components/WhyToOwnCat';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Catwiki - Home</title>
      </Helmet>
      <Banner />
      <PopularBreedSummary />
      <WhyToOwnCat />
    </>
  );
};

export default Home;
