import React, { useState, useEffect } from "react";
import { random } from "../ultils/random";
import { arrImg } from "../assets";
import { getTopCities } from "../reducers/topCitiesReducer";
import { useStateValue } from "../reducers";
import Search from "../components/search/Search";
import Nav from "../components/common/Nav";
import ListHistorySearch from "../components/ListHistorySearch";
import ListOfCities from "../components/common/cites/ListOfCities";
import Loading from "../components/common/Loading";
import ShowError from "../components/common/ShowError";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getIpAddressApi, getLocationByIpApi } from "../lib/api";
import { getHistoryWeather } from "../reducers/historyWeatherReducer";
import { useTranslation } from "react-i18next";

const Home = ({ showSideBar, isShowSideBar }) => {
  const { t, i18n } = useTranslation();
  const [
    {
      topCities: { loading, error, cities },
      lang,
      units,
    },
    dispatch,
  ] = useStateValue();
  const [backgroundImg] = useState(random(arrImg));

  const [locationKeyStorage, setLocationKeyStorage] = useLocalStorage(
    "history",
    []
  );
  window.localStorage.setItem("lang", lang ? lang : "en");
  useEffect(() => {
    getTopCities({ quantity: 50, dispatch, units });
  }, [units]);

  useEffect(() => {
    const fetchNeighborCites = async () => {
      const ip = await getIpAddressApi();
      if (!ip) {
        return;
      }
      const { data: locationByIp } = await getLocationByIpApi(ip, lang);
      if (locationKeyStorage.length === 0) {
        setLocationKeyStorage(locationByIp.Key);
      }

      getHistoryWeather({ dispatch });
    };

    fetchNeighborCites();
  }, []);

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center border-b-2 border-red-400"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Nav
          pos="fixed"
          isShowSideBar={isShowSideBar}
          showSideBar={showSideBar}
        />
        <div className="mt-12 w-full flex justify-center items-center">
          <div className="w-3/4">
            <Search showSideBar={showSideBar} />
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
            <div className="text-gray-500 w-full sm:w-4/5 font-semibold uppercase mt-10 mb-2">
              {t("topCity")}
            </div>
            <ListOfCities cities={cities} />
          </div>
        )}

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
