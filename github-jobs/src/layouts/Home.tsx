import React from 'react';

import JobSearch from '../components/JobSearch';

const Home: React.FC = (): JSX.Element => {
  const handleJobSearchByTag = (jobText: string) => {
    console.log(jobText);
  };

  return (
    <>
      <JobSearch onJobSearch={handleJobSearchByTag} />
    </>
  );
};

export default Home;
