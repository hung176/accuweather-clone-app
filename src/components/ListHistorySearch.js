import React, { useState, useEffect } from 'react';
import { useStateValue } from '../reducers';
import HistoryLocation from './HistoryLocation';
import { pickCurrentWeatherData } from '../ultils/pickData';
import { getCurrentWeatherApi, getLocationByKeyApi } from '../lib/api';

const ListHistoryLocations = ({ locationKeyStorage }) => {
  const [{ units }, dispatch] = useStateValue();
  const [historyLocationWeather, setHistoryLocationWeather] = useState([]);

  useEffect(() => {
    const getHistoryLocationWeather = async () => {
      const historyLocations = await Promise.all(locationKeyStorage.map(async(locationKey) => {
        const { data: locationInfo } = await getLocationByKeyApi(locationKey);
        const { data: weatherInfo } = await getCurrentWeatherApi(locationKey);

        return {
          locationKey,
          cityName: locationInfo.LocalizedName,
          country: { id: locationInfo.Country.ID, name: locationInfo.Country.LocalizedName },
          temperature: pickCurrentWeatherData(weatherInfo).temperature[units],
          weatherText: pickCurrentWeatherData(weatherInfo).weatherText,
          weatherIcon: pickCurrentWeatherData(weatherInfo).weatherIcon,
        };
      }));

      setHistoryLocationWeather(historyLocations);
    };

    getHistoryLocationWeather();
  }, []);

  return (
    <div className="mx-auto py-2 max-w-4xl w-3/4 flex flex-col justify-center md:flex-row md:justify-between md:flex-wrap">
      {historyLocationWeather.map(location => (
        <HistoryLocation key={location.locationKey} location={location} />
      ))}
    </div>
  );
};

export default ListHistoryLocations;