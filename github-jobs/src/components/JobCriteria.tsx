import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import Checkbox from './Checkbox';
import { JobCriteriaContext } from '../context/JobCriteriaContext';

const JobCriteria: React.FC = () => {
  const jobCriteria = useContext(JobCriteriaContext);

  const isChecked = (label: string) => {
    return jobCriteria.location.toLowerCase() === label.toLowerCase();
  };

  const onLocationCheckboxChange = (checked: boolean, location: string) => {
    if (checked) {
      jobCriteria.location = location;
    } else {
      jobCriteria.location = '';
    }
  };

  return (
    <div className="font-poppins mb-4">
      <Checkbox
        labelText="Full Time"
        containerStyle="mb-5"
        checked={jobCriteria.fullTime}
        onChange={(event) => (jobCriteria.fullTime = event.target.checked)}
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
          value={jobCriteria.location}
          onChange={(event) => (jobCriteria.location = event.target.value)}
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
        labelText="New York"
        containerStyle="mb-3"
        checked={isChecked('New York')}
        onChange={(event) => onLocationCheckboxChange(event.target.checked, 'New York')}
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
