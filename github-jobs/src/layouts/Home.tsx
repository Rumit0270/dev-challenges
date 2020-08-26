import React, { useContext } from 'react';

import JobSearch from '../components/JobSearch';
import JobCriteria from '../components/JobCriteria';
import JobListing from '../components/JobListing';
import { JobCriteriaContext } from '../context/JobCriteriaContext';

const Home: React.FC = (): JSX.Element => {
  const jobCriteria = useContext(JobCriteriaContext);

  const handleJobSearchByTag = (jobText: string) => {
    if (jobCriteria.jobDescription === jobText) {
      return;
    }
    jobCriteria.setJobDescription(jobText);
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
