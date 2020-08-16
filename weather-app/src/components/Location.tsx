import React from 'react';
import { ILocation } from '../api/weatherApiService';

interface LocationProps {
  location: ILocation;
  onClick: (location: ILocation) => void;
}

const Location: React.FC<LocationProps> = ({
  location,
  onClick,
}): JSX.Element => {
  return (
    <button
      className=" w-full flex justify-between px-4 py-6 mb-6 cursor-pointer font-raleway location-container"
      onClick={() => onClick(location)}
    >
      <span className="text-white font-medium text-base leading-5">
        {location.title}
      </span>
      <span className="material-icons text-comet text-lg opacity-0">
        arrow_forward_ios
      </span>
    </button>
  );
};

export default Location;
