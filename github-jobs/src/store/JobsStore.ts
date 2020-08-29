import { observable, action } from 'mobx';
import { IJob } from '../api/jobsApiService';

const ROWS_PER_PAGE = 5;
interface IJobStore {
  jobs: IJob[];
  readonly visibleJobs: IJob[];
  currentPage: number;
  totalPage: number;
  loading: boolean;
  readonly jobsCount: number;
  setJobs: (jobs: IJob[]) => void;
  setCurrentPage: (page: number) => void;
}

export default observable<IJobStore>(
  {
    jobs: [],
    loading: false,
    currentPage: 1,

    // computed property
    get jobsCount() {
      return this.jobs.length;
    },

    get visibleJobs() {
      // return paginated jobs
      let startIndex = (this.currentPage - 1) * ROWS_PER_PAGE;
      let endIndex = startIndex + ROWS_PER_PAGE;

      return this.jobs.slice(startIndex, endIndex);
    },

    get totalPage() {
      return Math.ceil(this.jobsCount / ROWS_PER_PAGE);
    },

    setJobs(jobs: IJob[]) {
      this.jobs = jobs;
    },

    setCurrentPage(page: number) {
      this.currentPage = page;
    },
  },
  {
    setJobs: action,
    setCurrentPage: action,
  },
);
