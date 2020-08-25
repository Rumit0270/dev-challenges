import { observable } from 'mobx';

class JobCriteriaStore {
  @observable jobTitle: string = '';
  @observable fullTime: boolean = false;
  @observable location: string = 'New York';
}

export default () => new JobCriteriaStore();
