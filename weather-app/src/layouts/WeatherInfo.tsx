import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  TemperateUnit,
  temperatureUnitState,
  weatherDetailState,
} from '../store/atom';
import WeatherCard from '../components/WeatherCard';
import { getFormattedDate } from '../utils/date';

const WeatherInfo: React.FC = (): JSX.Element => {
  const weatherDetail = useRecoilValue(weatherDetailState);
  const [temperatureUnit, setTemperatureUnit] = useRecoilState(
    temperatureUnitState
  );

  const { loading, error, detail } = weatherDetail;

  console.log(weatherDetail);

  const renderTemperatureUnitButtons = () => {
    return (
      <div className="flex justify-end">
        <button
          className={`text-lg font-bold leading-5 temperature-button ${
            temperatureUnit === TemperateUnit.celsius
              ? 'temperature-button--active'
              : 'temperature-button--inactive'
          }`}
          onClick={() => setTemperatureUnit(TemperateUnit.celsius)}
        >
          {TemperateUnit.celsius}
        </button>
        <button
          className={`text-lg font-bold leading-5 temperature-button ${
            temperatureUnit === TemperateUnit.fahrenheit
              ? 'temperature-button--active'
              : 'temperature-button--inactive'
          }`}
          onClick={() => setTemperatureUnit(TemperateUnit.fahrenheit)}
        >
          {TemperateUnit.fahrenheit}
        </button>
      </div>
    );
  };

  const renderWeatherCards = () => {
    if (!detail) {
      return null;
    }

    let weatherDetailsFiltered = detail.consolidated_weather.filter(
      (item, index) => index !== 0
    );

    return (
      <div className="flex flex-wrap justify-between">
        {weatherDetailsFiltered.map((item, index) => {
          if (index === 0) {
            return <WeatherCard weather={item} timestamp="Tomorrow" />;
          }
          return (
            <WeatherCard
              weather={item}
              timestamp={getFormattedDate(item.applicable_date)}
            />
          );
        })}
      </div>
    );
  };

  if (loading || error) {
    return (
      <section className="min-h-screen w-full lg:w-2/3 bg-black px-12 py-10 flex flex-col justify-center items-center font-raleway weather-info">
        <span className="text-3xl text-dark-gray2">Loading...</span>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full lg:w-2/3 bg-black px-12 py-10 flex flex-col justify-between font-raleway weather-info">
      {renderTemperatureUnitButtons()}
      {renderWeatherCards()}
    </section>
  );
};

export default WeatherInfo;
