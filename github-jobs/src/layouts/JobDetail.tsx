import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IJob, getJobDetail } from '../api/jobsApiService';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import { getDistanceFromNow } from '../utils/date';

const JobDetail: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const [job, setJob] = useState<IJob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const isFullTime = job && job.type.toLowerCase() === 'full time' ? true : false;
  const jobDate = job ? getDistanceFromNow(new Date(job.created_at)) : '';

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let res = await getJobDetail(id);
        let selectedJob = res.data;
        if (selectedJob) {
          setJob(selectedJob);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, [setLoading, setJob, id]);

  if (loading && !job) {
    return (
      <div className="flex justify-center items-center w-full job-detail">
        <BeatLoader size={20} color="#1E86FF" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center w-full font-poppins job-detail">
        <p className="text-base leading-5 text-heather tracking-wider">Oops! Job not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row job-detail">
      <div className="font-poppins mb-8 pr-3 md:pr-4 md:mr-4 job-detail__aside">
        <Link
          to="/"
          className="inline-flex items-center font-medium text-sm leading-5 text-dodger-blue mb-6"
        >
          <span className="mr-2 material-icons back-icon">trending_flat</span>
          <span>Back to search</span>
        </Link>

        <h5 className="uppercase font-bold text-sm leading-5 text-heather mb-4">How to apply</h5>
        <div className="font-medium text-sm leading-5 text-chambray how-to-apply">
          {parse(job.how_to_apply)}
        </div>
      </div>
      <div className="font-roboto job-detail__main">
        <div className="mb-2 flex flex-col md:flex-row">
          <h2 className="text-chambray font-bold text-xl md:text-2xl leading-6 md:leading-7 mb-2 md:mb-1 md:mr-2">
            {job.title}
          </h2>
          {isFullTime && (
            <span className="inline-block self-start p-1 rounded font-bold text-xs leading-3 text-chambray full-time-indicator">
              Full time
            </span>
          )}
        </div>
        <div className="flex items-center text-heather2">
          <span className="material-icons mr-2 text-base">access_time</span>
          <span className="text-xs md:text-sm leading-3">{jobDate}</span>
        </div>

        <div className="flex my-6 md:my-8">
          <div
            className="mr-4 company-logo"
            style={{ backgroundImage: `url(${job.company_logo})` }}
          />
          <div className="flex flex-col justify-evenly">
            <h3 className="font-bold text-base md:text-lg leading-5 text-chambray">
              {job.company}
            </h3>
            <div className="inline-flex self-stretch items-center text-heather">
              <span className="material-icons mr-2 text-base">public</span>
              <span className="text-xs md:text-sm leading-3">{job.location}</span>
            </div>
          </div>
        </div>

        <div className="text-base text-chambray job-description">{parse(job.description)}</div>
      </div>
    </div>
  );
};

export default JobDetail;
