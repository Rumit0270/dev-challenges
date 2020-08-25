import React from 'react';

import JobSearch from '../components/JobSearch';
import JobCriteria from '../components/JobCriteria';
import JobListing from '../components/JobListing';

const Home: React.FC = (): JSX.Element => {
  const handleJobSearchByTag = (jobText: string) => {
    console.log(jobText);
  };

  return (
    <>
      <JobSearch onJobSearch={handleJobSearchByTag} />
      <div className="flex flex-col items-stretch md:flex-row md:items-start">
        <JobCriteria />
        <JobListing />
      </div>
    </>
  );
};

export default Home;
