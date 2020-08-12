import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentWeatherDetailState } from '../store/selector';

const CurrentWeather: React.FC = (): JSX.Element => {
  const weatherDetail = useRecoilValue(currentWeatherDetailState);

  console.log(weatherDetail);

  return (
    <section className="h-screen w-full lg:w-1/3 static lg:fixed lg:left-0 lg:top-0 py-4 lg:py-10 bg-mirage flex flex-col justify-between items-center font-raleway mb-6">
      <div className="px-3 lg:px-10 flex justify-between items-center self-stretch">
        <button className="bg-dark-gray px-3 py-2 text-white text-base leading-5 font-medium">
          Search for places
        </button>
        <button className="bg-dark-gray w-10 h-10 text-base text-white p-1 inline-flex items-center justify-center current-location-button">
          <span className="material-icons">my_location</span>
        </button>
      </div>
    </section>
  );
};

export default CurrentWeather;
