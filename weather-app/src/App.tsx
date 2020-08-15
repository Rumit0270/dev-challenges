import React from 'react';

import CurrentWeather from './layouts/CurrentWeather';
import WeatherInfo from './layouts/WeatherInfo';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <CurrentWeather />
      <WeatherInfo />
    </>
  );
};

export default App;
