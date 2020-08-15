import React from 'react';
import { useRecoilValue } from 'recoil';

import { getFormattedDate } from '../utils/date';
import { currentWeatherDetailState } from '../store/selector';

const CurrentWeather: React.FC = (): JSX.Element => {
  const weatherDetail = useRecoilValue(currentWeatherDetailState);

  const { loading, currentWeatherDetail, error } = weatherDetail;

  let weatherStateImg = currentWeatherDetail
    ? currentWeatherDetail.weatherState.replace(' ', '')
    : '';

  const renderLoading = () => {
    if (loading) {
      return <span className="text-3xl text-dark-gray2">Loading...</span>;
    }
  };

  const renderError = () => {
    if (loading) {
      return null;
    }

    if (error || !currentWeatherDetail) {
      return (
        <span className="text-3xl text-dark-gray2">
          Something went wrong. Please make sure you have enabled location.
        </span>
      );
    }
  };

  const renderWeather = () => {
    if (!currentWeatherDetail) {
      return null;
    }

    return (
      <>
        <div className="px-3 lg:px-10 flex justify-between items-center self-stretch">
          <button className="bg-dark-gray px-3 py-2 text-white text-base leading-5 font-medium">
            Search for places
          </button>
          <button className="bg-dark-gray w-10 h-10 text-base text-white p-1 inline-flex items-center justify-center current-location-button">
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
            {currentWeatherDetail.currentTemp}
            <span className="text-5xl text-dark-gray2">℃</span>
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

  return (
    <section
      className={`h-screen w-full lg:w-1/3 static lg:fixed lg:left-0 lg:top-0 py-4 lg:py-10 bg-mirage flex flex-col ${
        currentWeatherDetail ? 'justify-between' : 'justify-center'
      } items-center font-raleway mb-6`}
    >
      {renderLoading()}
      {renderError()}
      {renderWeather()}
    </section>
  );
};

export default CurrentWeather;
