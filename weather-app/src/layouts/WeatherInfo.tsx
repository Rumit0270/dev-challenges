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

  const renderTemperatureUnitButtons = () => {
    let temperatureButtonWrapperClass = loading || !detail ? 'opacity-0' : '';

    return (
      <div
        className={`flex justify-end mb-4 mr-6 ${temperatureButtonWrapperClass}`}
      >
        <button
          className={`text-base md:text-lg font-bold leading-5 temperature-button ${
            temperatureUnit === TemperateUnit.celsius
              ? 'temperature-button--active'
              : 'temperature-button--inactive'
          }`}
          onClick={() => setTemperatureUnit(TemperateUnit.celsius)}
        >
          {TemperateUnit.celsius}
        </button>
        <button
          className={`text-base md:text-lg font-bold leading-5 temperature-button ${
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
      <div className="flex flex-wrap justify-between mb-5">
        {weatherDetailsFiltered.map((item, index) => {
          if (index === 0) {
            return (
              <WeatherCard key={item.id} weather={item} timestamp="Tomorrow" />
            );
          }
          return (
            <WeatherCard
              key={item.id}
              weather={item}
              timestamp={getFormattedDate(item.applicable_date)}
            />
          );
        })}
      </div>
    );
  };

  const renderTodaysHighlights = () => {
    if (!detail || detail.consolidated_weather.length <= 0) {
      return null;
    }

    let todaysWeather = detail.consolidated_weather[0];

    return (
      <div className="text-white font-raleway mb-4">
        <h1 className="font-bold text-lg md:text-3xl leading-6 mb-4">
          Today's Highlights
        </h1>
        <div className="flex flex-wrap">
          <div className="flex-1 flex flex-col items-center p-5 lg:p-6 mr-6 bg-mirage todays-stat mb-6">
            <span className="font-medium text-base leading-5 text-center">
              Wind Status
            </span>
            <p className="font-bold text-4xl md:text-6xl mb-1">
              {Math.round(todaysWeather.wind_speed)}
              <span className="text-4xl font-semibold ml-2">mph</span>
            </p>
            <div className="inline-flex items-center">
              <div className="wind-icon-container">
                <span
                  className="material-icons wind-icon"
                  style={{
                    transform: `rotate(${Math.round(
                      todaysWeather.wind_direction
                    )}deg)`,
                  }}
                >
                  near_me
                </span>
              </div>
              <span className="text-base md:text-lg font-medium">
                {todaysWeather.wind_direction_compass}
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center p-5 lg:p-6 mr-6 bg-mirage todays-stat mb-6">
            <span className="font-medium text-base leading-5 text-center">
              Humidity
            </span>
            <p className="font-bold text-4xl md:text-6xl mb-1">
              {Math.round(todaysWeather.humidity)}
              <span className="text-lg md:text-4xl font-semibold ml-2">%</span>
            </p>
            <div className="progress-bar-wrapper text-dark-gray2">
              <div className="flex font-bold text-sm leading-3 justify-between">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="w-full bg-white my-1 progress-total">
                <div
                  className="h-full progress"
                  style={{ width: `${todaysWeather.humidity}%` }}
                ></div>
              </div>
              <div className="flex font-bold text-sm leading-3 justify-end">
                <span>%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex-1 flex flex-col items-center p-5 lg:p-6 mr-6 bg-mirage todays-stat mb-6">
            <span className="font-medium text-base leading-5 text-center">
              Visibility
            </span>
            <p className="font-bold text-4xl md:text-6xl mb-1">
              {todaysWeather.visibility.toFixed(2)}
              <span className="text-lg md:text-4xl font-semibold ml-2">
                miles
              </span>
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center p-5 lg:p-6 mr-6 bg-mirage todays-stat mb-6">
            <span className="font-medium text-base leading-5 text-center">
              Air Pressure
            </span>
            <p className="font-bold text-4xl md:text-6xl mb-1">
              {Math.round(todaysWeather.air_pressure)}
              <span className="text-lg md:text-4xl font-semibold ml-2">mb</span>
            </p>
          </div>
        </div>
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
    <section className="min-h-screen w-full lg:w-2/3 bg-black pl-12 pr-10 py-10 flex flex-col justify-between font-raleway weather-info">
      {renderTemperatureUnitButtons()}
      {renderWeatherCards()}
      {renderTodaysHighlights()}

      <footer className="text-center font-montserrat font-semibold text-sm leading-5 text-comet">
        Rumit Tandukar @ DevChallenges.io
      </footer>
    </section>
  );
};

export default WeatherInfo;
