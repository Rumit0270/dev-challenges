import React, { createContext } from 'react';

import jobCriteria from '../store/JobCriteriaStore';

const JobCriteriaContext = createContext(jobCriteria);

const JobCriteriaProvider: React.FC<{ children?: JSX.Element }> = ({ children }): JSX.Element => {
  return <JobCriteriaContext.Provider value={jobCriteria}>{children}</JobCriteriaContext.Provider>;
};

export { JobCriteriaContext, JobCriteriaProvider };
