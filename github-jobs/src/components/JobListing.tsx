import React, { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import { observer } from 'mobx-react';
import { JobsContext } from '../context/JobsContext';
import Job from './Job';
import Pagination from './Pagination/Pagination';

const JobListing: React.FC = () => {
  const jobsState = useContext(JobsContext);
  const { visibleJobs, loading, currentPage, totalPage } = jobsState;

  const handlePageChange = (page: number) => {
    jobsState.setCurrentPage(page);
    window.scrollTo(0, 0);
  };

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
      <Pagination
        className="mt-8 mb-12"
        currentPage={currentPage}
        totalPage={totalPage}
        onPageClick={handlePageChange}
      />
    </div>
  );
};

export default observer(JobListing);
