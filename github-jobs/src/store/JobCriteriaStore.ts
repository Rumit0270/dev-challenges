import { observable, action } from 'mobx';

interface IJobCriteriaStore {
  jobDescription: string;
  fullTime: boolean;
  location: string;
  setJobDescription: (description: string) => void;
  setFullTime: (fullTime: boolean) => void;
  setLocation: (location: string) => void;
}

export default observable<IJobCriteriaStore>(
  {
    jobDescription: '',
    fullTime: false,
    location: 'London',

    setJobDescription(description: string) {
      this.jobDescription = description;
    },

    setFullTime(fullTime: boolean) {
      this.fullTime = fullTime;
    },

    setLocation(location: string) {
      this.location = location;
    },
  },
  {
    setJobDescription: action,
    setFullTime: action,
    setLocation: action,
  },
);
