import React, { useState, useEffect } from 'react';
import { random } from '../ultils/random';
import { arrImg } from '../assets';
import { getTopCities } from '../reducers/topCitiesReducer';
import { useStateValue } from '../reducers';
import Search from '../components/search/Search';
import Nav from '../components/common/Nav';
import ListHistorySearch from '../components/ListHistorySearch';
import ListOfCities from '../components/common/cites/ListOfCities';
import Loading from '../components/common/Loading';
import ShowError from '../components/common/ShowError';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  getIpAddressApi,
  getLocationByIpApi,
  getNeighborCitiesApi,
  getCurrentWeatherApi,
  getLocationByKeyApi,
} from '../lib/api';
import { iconUrl } from '../consts/api';
import { getHistoryWeather } from '../reducers/historyWeatherReducer';

const Home = ({ showSideBar, isShowSideBar }) => {
  const [{ topCities: { loading, error, cities }, units }, dispatch] = useStateValue();
  const [backgroundImg, ] = useState(random(arrImg));
  const [neighborsWeather, setNeighborWeather] = useState([]);

  const [locationKeyStorage, setLocationKeyStorage] = useLocalStorage('history', []);

  useEffect(() => {
    getTopCities({ quantity: 50, dispatch, units });
  }, []);

  useEffect(() => {
    const fetchNeighborCites = async () => {
      const ip = await getIpAddressApi();
      if (!ip) {
        return;
      };
      const { data: locationByIp } = await getLocationByIpApi(ip);
      if (locationKeyStorage.length === 0) {
        setLocationKeyStorage(locationByIp.Key);
      };

      getHistoryWeather({ dispatch });

      // const { data } = await getNeighborCitiesApi(locationByIp.Key);
      // const locationKeys = data.map(d => d.Key);
      
      // const neighborsCurrentWeather = await Promise.all(locationKeys.map(async (locationKey) => {
      //   const { data: locationData } = await getLocationByKeyApi(locationKey);
      //   const { data } = await getCurrentWeatherApi(locationKey);
      //   return { 
      //     locationKey,
      //     cityName: locationData.EnglishName,
      //     country: { id: locationData.Country.ID, name: locationData.Country.EnglishName },
      //     temperature: {
      //       metric: `${data[0].Temperature.Metric.Value.toFixed()}°${data[0].Temperature.Metric.Unit}`,
      //       imperial: `${data[0].Temperature.Imperial.Value.toFixed()}°${data[0].Temperature.Imperial.Unit}`,
      //     },
      //     weatherText: data[0].WeatherText,
      //     weatherIcon: `${iconUrl}/${data[0].WeatherIcon}.svg`,
      //    };
      // }));

      // setNeighborWeather(neighborsCurrentWeather);
    };

    fetchNeighborCites();
    
  }, []);

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center border-b-2 border-red-400"
        style={{ backgroundImage: `url(${backgroundImg})`}}
      >
        <Nav pos="fixed" isShowSideBar={isShowSideBar} showSideBar={showSideBar} />
        <div className="mt-12 w-full flex justify-center items-center">
          <div className="w-3/4">
            <Search />
          </div>
        </div>


        <div className="w-full mt-4 mb-10 flex justify-center items-center">
          <div className="w-3/4 md:w-1/2">
            <ListHistorySearch />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-start items-center ">
        {loading && (
          <div className="w-full mt-4">
            <Loading />
          </div>
        )}
        {!loading && !error && (
          <div className="pb-4 w-full flex flex-col items-center">
            <div className="text-gray-500 w-full sm:w-4/5 font-semibold uppercase mt-10 mb-2">Top Cities Weather Conditions</div>
            <ListOfCities cities={cities} />
          </div>
        )}

        {/* {neighborsWeather.length && (
          <div className="pb-4 w-full flex flex-col items-center">
            <div className="text-gray-500 font-semibold uppercase w-full sm:w-4/5 mt-10 mb-2">Local Weather Conditions</div>
              <ListOfCities cities={neighborsWeather} setLocationKeyStorage={setLocationKeyStorage} />
          </div>
        )} */}
        {error && (
          <div className="w-full mt-4">
            <ShowError error={error} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
