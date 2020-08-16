import React, { useState } from 'react';

import { getLocationByTag, ILocation } from '../api/weatherApiService';
import Location from './Location';

interface LocationSearchProps {
  onClose: () => void;
  onLocationClick: (location: ILocation) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({
  onClose,
  onLocationClick,
}): JSX.Element => {
  const [searchInputText, setSearchInputText] = useState<string>('');
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchClick = async () => {
    if (!searchInputText) {
      return;
    }
    try {
      setLoading(true);
      let locationRes = await getLocationByTag(searchInputText);
      setLocations(locationRes.data);
      setLoading(false);
    } catch {
      setLocations([]);
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const renderLocations = () => {
    if (loading) {
      return (
        <div className="h-full flex-col flex justify-center items-center">
          <div className="loader" />
        </div>
      );
    }

    return locations.map((location) => (
      <Location
        key={location.woeid}
        location={location}
        onClick={onLocationClick}
      />
    ));
  };

  return (
    <div className="w-full h-full px-3 lg:px-10 flex flex-col items-stretch font-raleway">
      <button className="self-end text-white cursor-pointer" onClick={onClose}>
        <span className="material-icons">close</span>
      </button>

      <div className="flex flex-row items-stretch h-12 mt-6 mb-16">
        <div className="relative flex-1 flex items-center px-3 border-white border-opacity-100 border-solid search-input-group">
          <span className="material-icons text-comet">search</span>
          <input
            type="text"
            placeholder="Search location"
            className="absolute top-0 h-full text-white search-input focus:outline-none"
            value={searchInputText}
            onChange={(event) => setSearchInputText(event.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            disabled={loading}
          />
        </div>

        <button
          className="bg-blue w-24 text-white font-semibold text-base leading-5 ml-2 search-button"
          onClick={handleSearchClick}
          disabled={loading}
        >
          Search
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">{renderLocations()}</div>
    </div>
  );
};

export default LocationSearch;
