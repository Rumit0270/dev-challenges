import React from 'react';
import { useRecoilValue } from 'recoil';

import { IConsolidatedWeather } from '../api/weatherApiService';
import { temperatureUnitState, TemperateUnit } from '../store/atom';
import { getFahrenheitValue } from '../utils/temperature';

interface WeatherCardProps {
  weather: IConsolidatedWeather;
  timestamp: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  timestamp,
}): JSX.Element => {
  const temperatureUnit = useRecoilValue(temperatureUnitState);
  let weatherImgFilename = weather.weather_state_name.replace(' ', '');
  let maxTemp =
    temperatureUnit === TemperateUnit.celsius
      ? weather.max_temp
      : getFahrenheitValue(weather.max_temp);
  let minTemp =
    temperatureUnit === TemperateUnit.celsius
      ? weather.min_temp
      : getFahrenheitValue(weather.min_temp);

  return (
    <div className="flex flex-col items-center p-4 font-raleway bg-mirage flex-1 mr-6 weather-card-container">
      <span className="text-white text-center text-base font-medium leading-5">
        {timestamp}
      </span>

      <img
        src={require(`../assets/images/${weatherImgFilename}.png`)}
        alt={`${weather.weather_state_name}`}
        className=" mb-6 lg:mb-8 weather-card-image"
      />

      <div className="font-medium self-stretch flex justify-evenly">
        <span className="text-white  text-base leading-5">
          {Math.round(maxTemp)}
          {temperatureUnit}
        </span>
        <span className="text-dark-gray2 text-base leading-5">
          {Math.round(minTemp)}
          {temperatureUnit}
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
