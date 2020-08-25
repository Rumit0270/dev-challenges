import React from 'react';
import Checkbox from './Checkbox';

const JobCriteria: React.FC = () => {
  return (
    <div className="font-poppins mb-4">
      <Checkbox labelText="Full Time" containerStyle="mb-5" />

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
        />
      </div>

      <Checkbox labelText="London" containerStyle="mb-3" />
      <Checkbox labelText="Amsterdam" containerStyle="mb-3" />
      <Checkbox labelText="New York" containerStyle="mb-3" />
      <Checkbox labelText="Berlin" containerStyle="mb-3" />
    </div>
  );
};

export default JobCriteria;
