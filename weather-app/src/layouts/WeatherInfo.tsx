import React from 'react';
import { useRecoilState } from 'recoil';

import { TemperateUnit, temperatureUnitState } from '../store/atom';

const WeatherInfo: React.FC = (): JSX.Element => {
  const [temperatureUnit, setTemperatureUnit] = useRecoilState(
    temperatureUnitState
  );

  return (
    <section className="min-h-screen w-full lg:w-2/3 bg-black px-12 py-10 font-raleway weather-info">
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
    </section>
  );
};

export default WeatherInfo;
