import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { currentParamsIndex } from "../../consts/weatherParamsIndex";
import WeatherParam from "../common/WeatherParam";
import ShowError from "../common/ShowError";
import { useTranslation } from "react-i18next";

const ToDayWeather = ({ currentWeather, onNavigate }) => {
  const { t } = useTranslation();
  const { error, conditions } = currentWeather;
  const basicParams = ["maxUVIndex", "humidity", "wind", "windGust"].map(
    (p) => ({
      name: t(p),
      value: conditions[p],
    })
  );

  if (error) {
    return <ShowError error={error} />;
  }

  return (
    <div className="flex flex-col p-3 justify-start items-center bg-white">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="font-semibold">{t("currentWeather")}</span>
            <span>{conditions.time}</span>
          </div>
          <div className="flex justify-center items-center ml-4">
            <img
              className="w-24 h-24 mr-2"
              src={conditions.weatherIcon}
              alt="to-day-weather"
            />
            <div className="flex flex-col justify-center items-center">
              <span className="text-7xl text-gray-500">
                {conditions.temperature}
              </span>
              <span>{`RealFeel® ${conditions.realFeel}`}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:ml-8">
          {basicParams.map((p) => (
            <WeatherParam key={p.name} title={p.name} value={p.value} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        <span>{conditions.weatherText}</span>
        <div className="flex items-center cursor-pointer" onClick={onNavigate}>
          <span className="mr-2">{t("moreDetails")}</span>
          <ArrowRightIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default ToDayWeather;
