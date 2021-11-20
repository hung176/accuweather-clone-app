import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../components/common/Nav';
import ListForecastBy from '../components/ListForecastBy';
import CurrentWeatherPage from '../components/currentWeather/CurrentWeatherPage';
import ToDayWeather from '../components/toDay/ToDayWeather';
import TwelveHourlyWeather from '../components/twelveHourly/TwelveHourlyWeather';
import FiveDaytWeather from '../components/fiveDay/FiveDaytWeather';
import { getCurrentWeather } from '../reducers/currentWeatherReducer';
import { getOneDayForecast } from '../reducers/oneDayForecastReducer';
import { getTwelveHourly } from '../reducers/twelveHourlyReducer';
import { changeUnits } from '../reducers/unitsReducers';
import { useStateValue } from '../reducers';
import { getFiveDay } from '../reducers/fiveDayReducer';
import Allergy from '../components/allergy/Allergy';

const Forecast = () => {
  const [{
    currentWeather,
    oneDayForecast,
    twelveHourly,
    fiveDay,
    units
  }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const { country, city, forecastType, cityCode } = useParams();

  const isCurrent = forecastType === 'current';
  const isToday = forecastType === 'today';
  const isHourly = forecastType === 'hourly';
  const isDaily = forecastType === 'daily';

  useEffect(() => {
    getCurrentWeather({ dispatch, locationKey: cityCode, units });
    if (isCurrent || isToday) {
      getOneDayForecast({ dispatch, locationKey: cityCode, units });
    };
    if (isHourly) {
      getTwelveHourly({ dispatch, locationKey: cityCode, units });
    };
    if (isDaily) {
      getFiveDay({  dispatch, locationKey: cityCode, units });
    }
    
  }, [forecastType, cityCode, units])

  const handleNavigate = (type) => {
    navigate(`/en/${country}/${city}/${type}/${cityCode}`);
  };

  const handleNavigateToCurrent = () => {
    navigate(`/en/${country}/${city}/current/${cityCode}`);
  };

  const navInfor = {
    temperature: currentWeather.conditions.temperature,
    weatherIcon: currentWeather.conditions.weatherIcon,
    country,
    city,
  };

  return (
    <div>
      <Nav navInfor={navInfor} />
      <div className="w-full mx-auto sm:w-4/5 flex flex-col items-start">
        <ListForecastBy forecastType={forecastType} onNavigate={handleNavigate} />
        <div className="my-10 w-full sm:w-4/5 sm:max-w-2xl">
          {isCurrent && (
            <CurrentWeatherPage
              currentWeather={currentWeather}
              oneDayForecast={oneDayForecast}
            />
          )}

          {isToday && (
            <div>
              <ToDayWeather
                currentWeather={currentWeather}
                onNavigate={handleNavigateToCurrent}
              />
              <Allergy oneDayForecast={oneDayForecast} />
            </div>
          )}

          {isHourly && <TwelveHourlyWeather twelveHourly={twelveHourly} />}

          {isDaily && <FiveDaytWeather fiveDay={fiveDay} />}
        </div>

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
