import React from 'react';
import CurrentWeatherPage from './CurrentWeatherPage';
import TwelveHourlyWeather from './TwelveHourlyWeather';
import FiveDaytWeather from './FiveDaytWeather';

const ForecastParams = ({
  forecastType,
  currentWeather,
  oneDayForecast,
}) => {
  const isCurrent = forecastType === 'current';
  const isToday = forecastType === 'today';
  const isHourly = forecastType === 'hourly';
  const isDaily = forecastType === 'daily';
  return (
    <div className="my-10 w-full sm:w-4/5 sm:max-w-2xl">
      {isCurrent && (
        <CurrentWeatherPage
          currentWeather={currentWeather}
          oneDayForecast={oneDayForecast}
        />
      )}
      {/* {isToday && <ToDayWeather oneDayForecast={oneDayForecast} />} */}
      {isHourly && <TwelveHourlyWeather />}
      {isDaily && <FiveDaytWeather />}
    </div>
  );
};

export default ForecastParams;