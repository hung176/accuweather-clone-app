import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CogIcon, XIcon } from "@heroicons/react/outline";
import { removeSpaces } from "../../ultils/removeSpaces";
import Search from "../search/Search";
import { useTranslation } from "react-i18next";

const SideDrawer = ({ show, showSideBar, historyWeather }) => {
  const { t } = useTranslation();
  const forecastByArr = [t("today"), t("hourly"), t("daily")];
  const forecastValue = ["today", "hourly", "daily"];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const { country, cityName, locationKey } = historyWeather;

  const handleClickSideBar = (type) => {
    showSideBar(false);
    navigate(`/${removeSpaces(country.id)}/${cityName}/${type}/${locationKey}`);
  };

  return (
    <div
      className={`h-screen p-4 sm:bg-white bg-accu sm:text-gray-700 text-white fixed top-20 sm:top-0 right-0 w-screen sm:w-80 z-50 shadow-2xl ${
        show ? "translate-x-0" : "translate-x-full"
      } transform  transition-transform`}
    >
      {!isHomePage && (
        <div className="w-full block sm:hidden mb-4">
          <Search small showSideBar={showSideBar} />
        </div>
      )}
      <div className="w-full flex justify-between items-center">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            showSideBar(false);
            navigate("/setting", { state: { country, cityName } });
          }}
        >
          <CogIcon className="w-8 h-8 mr-2" />
          <span className="text-xl">{t("setting")}</span>
        </div>
        <div>
          <XIcon
            className="w-8 h-8 cursor-pointer"
            onClick={() => showSideBar(false)}
          />
        </div>
      </div>

      {cityName && (
        <div className="mt-4 py-2 font-medium text-xl border-b-2 border-gray-200">
          {`${cityName}, ${country.name} ${t("weather")}`}
        </div>
      )}

      <ul className="h-1/3 flex flex-col items-start justify-evenly">
        {forecastByArr.map((fc, index) => (
          <li
            key={fc}
            className={`list-none cursor-pointer`}
            onClick={() => handleClickSideBar(forecastValue[index])}
          >
            {fc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
