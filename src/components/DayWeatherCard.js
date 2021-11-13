import React from 'react';
import Loading from './Loading';
import ShowError from './ShowError';
import ListWeatherParams from './ListWeatherParams';

const DayWeatherCard = ({
  loading,
  error,
  generalInfo,
  dayForecast,
}) => {
  return (
    <div>
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
{/* 
      {!loading && !error && (
        <div className="w-full mb-6 p-3 flex flex-col justify-center bg-white">
          <WeatherHeader header="DAY" time={generalInfo.date} />
          <div className="w-full mb-2 flex justify-center">
            <WeatherIconTemp
              imgUrl={dayForecast.weatherIcon}
              temp={`${generalInfo.temperature.max.value}°${generalInfo.temperature.max.unit}`}
            />
            <WeatherRealFeel
              realFeel={generalInfo.realFeel.max.value}
              realFeelShade={generalInfo.realFeelShade.max.value}
            />
          </div>
    
          <WeatherText weatherText={dayForecast.weatherText} />
    
          <ListWeatherParams />
        </div>
      )} */}
    </div>
  );
};

export default DayWeatherCard;
