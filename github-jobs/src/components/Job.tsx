import React from 'react';
import { IJob } from '../api/jobsApiService';
import { Link } from 'react-router-dom';
import { getDistanceFromNow } from '../utils/date';

interface JobProps {
  job: IJob;
}

const Job: React.FC<JobProps> = ({ job }): JSX.Element => {
  const isFullTime = job.type.toLowerCase() === 'full time' ? true : false;
  const jobDate = getDistanceFromNow(new Date(job.created_at));

  return (
    <Link
      to={`/jobs/${job.id}`}
      className="flex mb-5 p-3 pr-5 md:p-5 md:pb-2 bg-white rounded w-full font-roboto job"
    >
      <div
        className="mr-5 company__logo"
        style={{ backgroundImage: `url(${job.company_logo})` }}
      ></div>
      <div className="w-full">
        <h3 className="font-bold text-xs leading-3 text-chambray mb-2 md:mb-3">{job.company}</h3>
        <h4 className="text-base md:text-lg leading-5 md:leading-6 text-chambray mb-2 md:mb-3">
          {job.title}
        </h4>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          {isFullTime && (
            <span className="inline-block self-start p-2 rounded font-bold text-xs leading-3 text-chambray mb-4 md:mb-0 mr-2 full-time-indicator">
              Full time
            </span>
          )}

          <div className="py-2 self-stretch md:self-start flex items-center justify-between text-heather2">
            <div className="inline-flex items-center mr-5 md:mr-8">
              <span className="material-icons mr-2 text-base">public</span>
              <span className="text-xs sm:text-sm leading-3">{job.location}</span>
            </div>
            <div className="inline-flex items-center">
              <span className="material-icons mr-2 text-base">access_time</span>
              <span className="text-xs sm:text-sm leading-3">{jobDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Job;
