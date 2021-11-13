import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import ListForecastBy from '../components/ListForecastBy';
import ForecastParams from '../components/ForecastParams';
import { getCurrentWeather } from '../reducers/currentWeatherReducer';
import { getOneDayForecast } from '../reducers/oneDayForecastReducer';
import { changeUnits } from '../reducers/unitsReducers';
import { useStateValue } from '../reducers';

const Forecast = () => {
  const [{ currentWeather, oneDayForecast, units }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const { country, city, forecastType, cityCode } = useParams();

  console.log(currentWeather);

  useEffect(() => {
    if (forecastType === 'current') {
      getCurrentWeather({ dispatch, locationKey: cityCode, units });
      // getOneDayForecast({ dispatch, locationKey: cityCode, units });
    };
    
  }, [forecastType, cityCode, units])

  const handleNavigate = (type) => {
    navigate(`/en/${country}/${city}/${type}/${cityCode}`);
  };

  return (
    <div>
      <Nav />
      <div className="w-full mx-auto sm:w-4/5 flex flex-col items-start">
        <ListForecastBy forecastType={forecastType} onNavigate={handleNavigate} />
        <ForecastParams
          forecastType={forecastType}
          currentWeather={currentWeather}
          oneDayForecast={oneDayForecast}
        />
      </div>

      <select onChange={(e) => {
        const { target: { value } } = e;
        changeUnits({ dispatch, units: value })
      }}>
        <option value="metric">metric</option>
        <option value="imperial">imperatial</option>
      </select>
    </div>
  );
};

export default Forecast;
