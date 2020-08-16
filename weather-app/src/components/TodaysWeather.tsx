import React from 'react';
import { useRecoilValue } from 'recoil';
import { getFormattedDate } from '../utils/date';
import { ICurrentWeatherDetail } from '../store/selector';
import { temperatureUnitState, TemperateUnit } from '../store/atom';
import { getFahrenheitValue } from '../utils/temperature';

interface TodaysWeatherProps {
  currentWeatherDetail: ICurrentWeatherDetail;
  onLocationClick: () => void;
  onSearchClick: () => void;
}

const TodaysWeather: React.FC<TodaysWeatherProps> = ({
  currentWeatherDetail,
  onLocationClick,
  onSearchClick,
}) => {
  const temperatureUnit = useRecoilValue(temperatureUnitState);
  let temperature =
    temperatureUnit === TemperateUnit.celsius
      ? currentWeatherDetail.currentTemp
      : getFahrenheitValue(currentWeatherDetail.currentTemp);
  let weatherStateImg = currentWeatherDetail.weatherState.replace(' ', '');

  return (
    <>
      <div className="px-3 lg:px-10 flex justify-between items-center self-stretch">
        <button
          className="bg-dark-gray px-3 py-2 text-white text-base leading-5 font-medium"
          onClick={onSearchClick}
        >
          Search for places
        </button>
        <button
          className="bg-dark-gray w-10 h-10 text-base text-white p-1 inline-flex items-center justify-center current-location-button"
          onClick={onLocationClick}
        >
          <span className="material-icons">my_location</span>
        </button>
      </div>

      <figure className="flex justify-center items-center weather-img-container">
        <img
          src={require(`../assets/images/${weatherStateImg}.png`)}
          alt={`${currentWeatherDetail.weatherState}`}
          className="w-48 h-48 inline-flex justify-center items-center"
        />
      </figure>

      <div className="flex flex-col">
        <h1 className="text-white mb-8 current-temperature text-center">
          {Math.round(temperature)}
          <span className="text-5xl text-dark-gray2">{temperatureUnit}</span>
        </h1>
        <span className="text-dark-gray2 text-3xl text-center leading-10">
          {currentWeatherDetail.weatherState}
        </span>
      </div>

      <div className="flex flex-col text-dark-gray3 text-center">
        <p className="mb-5 font-medium">
          Today <span className="mx-2">•</span>
          {getFormattedDate(currentWeatherDetail.date)}
        </p>
        <p className="mb-0 font-semibold inline-flex items-center justify-center">
          <span className="material-icons mr-1">location_on</span>
          {currentWeatherDetail.city}
        </p>
      </div>
    </>
  );
};

export default TodaysWeather;
