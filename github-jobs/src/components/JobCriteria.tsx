import React, { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import Checkbox from './Checkbox';
import { JobCriteriaContext } from '../context/JobCriteriaContext';
import { JobsContext } from '../context/JobsContext';

const JobCriteria: React.FC = () => {
  const jobCriteria = useContext(JobCriteriaContext);
  const jobs = useContext(JobsContext);
  const [location, setLocation] = useState<string>(jobCriteria.location);

  useEffect(() => {
    setLocation(jobCriteria.location);
  }, [jobCriteria.location]);

  const isChecked = (label: string) => {
    return jobCriteria.location.toLowerCase() === label.toLowerCase();
  };

  const onLocationCheckboxChange = (checked: boolean, location: string) => {
    if (checked) {
      jobCriteria.setLocation(location);
    } else {
      jobCriteria.setLocation('');
    }
    jobs.setCurrentPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      jobCriteria.setLocation(location);
      jobs.setCurrentPage(1);
    }
  };

  const onFulltimeCheckboxChange = (checked: boolean) => {
    jobCriteria.setFullTime(checked);
    jobs.setCurrentPage(1);
  };

  return (
    <div className="font-poppins mb-4">
      <Checkbox
        labelText="Full Time"
        containerStyle="mb-5"
        checked={jobCriteria.fullTime}
        onChange={(event) => onFulltimeCheckboxChange(event.target.checked)}
      />

      <label htmlFor="location" className="uppercase font-bold text-sm leading-5 text-heather">
        Location
      </label>
      <div className="flex items-center mt-3 mb-6 p-2 bg-white rounded location-input-group">
        <span className="material-icons mr-2 text-heather">public</span>
        <input
          type="text"
          name="location"
          placeholder="City, state, zip code or country"
          className="font-roboto py-2 px-3 flex-1 text-steel-gray location-input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>

      <Checkbox
        labelText="London"
        containerStyle="mb-3"
        checked={isChecked('London')}
        onChange={(event) => onLocationCheckboxChange(event.target.checked, 'London')}
      />
      <Checkbox
        labelText="Amsterdam"
        containerStyle="mb-3"
        checked={isChecked('Amsterdam')}
        onChange={(event) => onLocationCheckboxChange(event.target.checked, 'Amsterdam')}
      />
      <Checkbox
        labelText="Munich"
        containerStyle="mb-3"
        checked={isChecked('Munich')}
        onChange={(event) => onLocationCheckboxChange(event.target.checked, 'Munich')}
      />
      <Checkbox
        labelText="Berlin"
        containerStyle="mb-3"
        checked={isChecked('Berlin')}
        onChange={(event) => onLocationCheckboxChange(event.target.checked, 'Berlin')}
      />
    </div>
  );
};

export default observer(JobCriteria);
