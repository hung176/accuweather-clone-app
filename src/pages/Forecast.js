import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import ListForecastBy from "../components/ListForecastBy";
import CurrentWeatherPage from "../components/currentWeather/CurrentWeatherPage";
import ToDayWeather from "../components/toDay/ToDayWeather";
import TwelveHourlyWeather from "../components/twelveHourly/TwelveHourlyWeather";
import FiveDaytWeather from "../components/fiveDay/FiveDaytWeather";
import { getCurrentWeather } from "../reducers/currentWeatherReducer";
import { getOneDayForecast } from "../reducers/oneDayForecastReducer";
import { getTwelveHourly } from "../reducers/twelveHourlyReducer";
import { useStateValue } from "../reducers";
import { getFiveDay } from "../reducers/fiveDayReducer";
import Allergy from "../components/allergy/Allergy";
import { getLocationByKeyApi } from "../lib/api";
import { removeSpaces } from "../ultils/removeSpaces";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ShowError from "../components/common/ShowError";
import { getHistoryWeather } from "../reducers/historyWeatherReducer";

const Forecast = ({ showSideBar }) => {
  const [
    { currentWeather, oneDayForecast, twelveHourly, units, lang, fiveDay },
    dispatch,
  ] = useStateValue();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { country, city, forecastType, cityCode } = useParams();
  const [locationKeyStore, setLocationKeyStore] = useLocalStorage(
    "history",
    []
  );

  const isCurrent = forecastType === "current";
  const isToday = forecastType === "today";
  const isHourly = forecastType === "hourly";
  const isDaily = forecastType === "daily";

  useEffect(() => {
    const getForecast = async () => {
      try {
        setError("");
        const { data } = await getLocationByKeyApi(cityCode);
        const correctCountryId = removeSpaces(data.Country.ID);
        const correctCity = removeSpaces(data.LocalizedName);

        setLocationKeyStore(cityCode);

        if (country !== correctCountryId || city !== correctCity) {
          navigate(
            `/${correctCountryId}/${correctCity}/${forecastType}/${cityCode}`
          );
        }

        getCurrentWeather({ dispatch, locationKey: cityCode });
        if (isCurrent || isToday) {
          getOneDayForecast({ dispatch, locationKey: cityCode });
        }
        if (isHourly) {
          getTwelveHourly({ dispatch, locationKey: cityCode });
        }
        if (isDaily) {
          getFiveDay({ dispatch, locationKey: cityCode });
        }
      } catch (error) {
        setError(error.message);
      }
    };

    getForecast();
  }, [dispatch, forecastType, cityCode, units]);

  useEffect(() => {
    getHistoryWeather({ dispatch });
  }, [cityCode, locationKeyStore]);

  const handleNavigate = (type) => {
    navigate(`/${country}/${city}/${type}/${cityCode}`);
  };

  const handleNavigateToCurrent = () => {
    navigate(`/${country}/${city}/current/${cityCode}`);
  };

  const navInfor = {
    temperature: currentWeather?.conditions?.temperature,
    weatherIcon: currentWeather?.conditions?.weatherIcon,
    country,
    city,
  };

  if (error) {
    return (
      <div>
        <Nav pos="fixed" showSideBar={showSideBar} />
        <ShowError error={error} />
      </div>
    );
  }

  return (
    <div>
      <Nav pos="sticky" navInfor={navInfor} showSideBar={showSideBar} />
      <div className="w-full mx-auto sm:w-3/4 flex flex-col items-start">
        <ListForecastBy
          forecastType={forecastType}
          onNavigate={handleNavigate}
        />
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
    </div>
  );
};

export default Forecast;
