import { observable, action } from 'mobx';
import { IJob } from '../api/jobsApiService';

interface IJobStore {
  jobs: IJob[];
  loading: boolean;
  readonly jobsCount: number;
  setJobs: (jobs: IJob[]) => void;
}

export default observable<IJobStore>(
  {
    jobs: [],
    loading: false,

    // computed property
    get jobsCount() {
      return this.jobs.length;
    },

    setJobs(jobs: IJob[]) {
      this.jobs = jobs;
    },
  },
  {
    setJobs: action,
  },
);
