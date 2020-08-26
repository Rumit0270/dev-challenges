import { useEffect, useContext } from 'react';
import { autorun } from 'mobx';
import { getJobs } from '../api/jobsApiService';
import { JobsContext } from '../context/JobsContext';
import { JobCriteriaContext } from '../context/JobCriteriaContext';

const useJobsDataFetch = () => {
  const jobsState = useContext(JobsContext);
  const jobCriteriaState = useContext(JobCriteriaContext);

  useEffect(() => {
    autorun(async () => {
      console.log('Fetching jobs');

      try {
        jobsState.loading = true;
        let res = await getJobs(
          1,
          jobCriteriaState.fullTime,
          jobCriteriaState.jobDescription,
          jobCriteriaState.location,
        );
        let jobs = res.data;
        jobsState.jobs = jobs;
        jobsState.loading = false;
      } catch (err) {
        jobsState.loading = false;
        jobsState.jobs = [];
      }
    });
  }, [jobsState, jobCriteriaState]);
};

export default useJobsDataFetch;
