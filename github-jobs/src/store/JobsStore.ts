import { observable, action, computed } from 'mobx';
// eslint-disable-next-line no-unused-vars
import { IJob } from '../api/jobsApiService';

class JobsStore {
  @observable jobs: IJob[] = [];
  @observable loading: boolean = false;

  @computed get jobsCount() {
    return this.jobs.length;
  }

  @action setJobs(jobs: IJob[]) {
    this.jobs = jobs;
  }

  @action setLoading(loading: boolean) {
    this.loading = loading;
  }
}

export default () => new JobsStore();
