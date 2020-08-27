import React, { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import { observer } from 'mobx-react';
import { JobsContext } from '../context/JobsContext';
import Job from './Job';

const JobListing: React.FC = () => {
  const { visibleJobs, loading, currentPage, setCurrentPage } = useContext(JobsContext);

  const renderJobs = () => {
    if (visibleJobs.length === 0) {
      return (
        <div className="flex-1 flex justify-center items-center job-listing-container">
          <p className="font-poppins font-medium text-base leading-5 text-heather tracking-wider p-4">
            No jobs found. Please change your job criteria and try again.
          </p>
        </div>
      );
    }
    return visibleJobs.map((job) => <Job key={job.id} job={job} />);
  };

  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center job-listing-container">
        <BeatLoader size={20} color="#1E86FF" />
      </div>
    );
  }

  return (
    <div className="flex-1 job-listing-container">
      <div className="mb-3">{renderJobs()}</div>
    </div>
  );
};

export default observer(JobListing);
