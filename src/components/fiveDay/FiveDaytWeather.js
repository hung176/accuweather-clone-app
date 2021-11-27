import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import HeaderCard from '../common/HeaderCard';
import Card from '../common/Card';
import SunMoon from '../common/SunMoon';
import ShowError from '../common/ShowError';
import { dayParamsIndex, nightParamsIndex } from '../../consts/weatherParamsIndex';

const FiveDaytWeather = ({ fiveDay }) => {
  const { loading, error, conditions } = fiveDay;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { day } = queryString.parse(search)

  const headerParams = conditions.map(d => ({
    time: d.timeDay,
    date: d.date,
    weatherIcon: d.dayForecast.weatherIcon,
    weatherText: d.dayForecast.weatherText,
    temperature: `${d.dayForecast.temperature}/${d.nightForecast.temperature}`,
    rainProbability: d.dayForecast.rainProbability,
  }));

  const handleAction = (index) => {
    navigate(`${pathname}?day=${index + 1}`)
  };

  if (error) {
    return (<ShowError error={error} />)
  }

  return (
    <div className="">
      {search && !loading && (
        <div>
          <Card
            header="day"
            conditions={conditions[day - 1].dayForecast || {}}
            paramsIndex={dayParamsIndex}
          />
          <Card
            header="night"
            conditions={conditions[day - 1].nightForecast || {}}
            paramsIndex={nightParamsIndex}
          />
          <SunMoon
            sunRise={conditions[day - 1].sunRise}
            sunSet={conditions[day - 1].sunSet}
            moonRise={conditions[day - 1].moonRise}
            moonSet={conditions[day - 1].moonSet}
          />
        </div>
      )}
      {!search && (
        <div>
          {headerParams.map((p, index) => (
            <div className="p-3 bg-white mb-4" key={`${p.date}-${index}`}>
              <HeaderCard params={p} onAction={() => handleAction(index)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiveDaytWeather;