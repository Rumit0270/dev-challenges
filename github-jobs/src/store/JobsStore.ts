import { observable, computed } from 'mobx';
import { IJob } from '../api/jobsApiService';

class JobsStore {
  @observable jobs: IJob[] = [];
  @observable loading: boolean = false;

  @computed get jobsCount() {
    return this.jobs.length;
  }
}

export default () => new JobsStore();
