import React, { createContext } from 'react';

import jobs from '../store/JobsStore';

const JobsContext = createContext(jobs);

const JobsProvider: React.FC<{ children?: JSX.Element }> = ({ children }): JSX.Element => {
  return <JobsContext.Provider value={jobs}>{children}</JobsContext.Provider>;
};

export { JobsContext, JobsProvider };
