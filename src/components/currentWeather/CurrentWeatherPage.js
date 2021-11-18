import React from 'react';
import Card from '../common/Card';
import SunMoon from '../common/SunMoon';
import {
  currentParamsIndex,
  dayParamsIndex,
  nightParamsIndex,
} from '../../consts/weatherParamsIndex';

const CurrentWeatherPage = ({ currentWeather, oneDayForecast }) => {
  const { loading: currentLoading, error: currentError, conditions: currentConditions } = currentWeather;
  const { loading: oneDayLoading, error: oneDayError, conditions: oneDayConditions } = oneDayForecast;

  return (
    <div>
      <Card
        header="current weather"
        loading={currentLoading}
        error={currentError}
        conditions={currentConditions}
        paramsIndex={currentParamsIndex}
      />
      <Card
        header="day"
        loading={oneDayLoading}
        error={oneDayError}
        conditions={oneDayConditions.dayForecast || {}}
        paramsIndex={dayParamsIndex}
      />
       <Card
        header="night"
        loading={oneDayLoading}
        error={oneDayError}
        conditions={oneDayConditions.nightForecast || {}}
        paramsIndex={nightParamsIndex}
      />
      <SunMoon
        sunRise={oneDayConditions.sunRise}
        sunSet={oneDayConditions.sunSet}
        moonRise={oneDayConditions.moonRise}
        moonSet={oneDayConditions.moonSet}
      />
    </div>
  );
};

export default CurrentWeatherPage;