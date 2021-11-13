import React from 'react';
import pick from 'lodash.pick';
import omit from 'lodash.omit';
import CurrentWeatherCard from './CurrentWeatherCard';
import DayWeatherCard from './DayWeatherCard';

const CurrentWeatherPage = ({ currentWeather, oneDayForecast }) => {

  return (
    <div>
      <CurrentWeatherCard currentWeather={currentWeather} />
      {/* <DayWeatherCard
        loading={loading}
        error={error}
        generalInfo={generalInfo}
        dayForecast={dayForecast}
      /> */}
      {/* <NightWeatherCard /> */}
    </div>
  );
};

export default CurrentWeatherPage;