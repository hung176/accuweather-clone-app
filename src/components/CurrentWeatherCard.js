import React from 'react';
import WeatherHeader from './WeatherHeader';
import WeatherIconTemp from './WeatherIconTemp';
import WeatherRealFeel from './WeatherRealFeel';
import WeatherText from './WeatherText';
import ListWeatherParams from './ListWeatherParams';
import Loading from './Loading';
import ShowError from './ShowError';
import pick from 'lodash.pick';
import { currentParamsIndex } from '../consts/weatherParamsIndex';

const CurrentWeatherCard = ({ currentWeather }) => {
  const { loading, error, conditions } = currentWeather;
  const currentWeatherArr = Object.keys(currentParamsIndex).map(p => ({
    name: currentParamsIndex[p],
    value: conditions[p]
  }));

  return (
    <div className="w-full">
      {loading && (
        <div className="w-full h-80 mb-6 p-3 flex justify-center items-center bg-white">
          <Loading />
        </div>
      )}

      {error && (
        <div>
          <ShowError error={error} />
        </div>
      )}

      {!loading && !error && (
        <div className="w-full mb-6 p-3 flex flex-col justify-center bg-white">
          <WeatherHeader header="CURRENT WEATHER" time={conditions.currentTime} />
          <div className="w-full mb-2 flex justify-center">
            <WeatherIconTemp
              imgUrl={conditions.weatherIcon}
              temp={conditions.temperature}
            />
            <WeatherRealFeel
              realFeel={conditions.realFeel}
              realFeelShade={conditions.realFeelShade}
            />
          </div>
    
          <WeatherText weatherText={conditions.weatherText} />
    
          <ListWeatherParams weatherArr={currentWeatherArr} />
        </div>
      )}
    </div>
  );
};

export default CurrentWeatherCard;
