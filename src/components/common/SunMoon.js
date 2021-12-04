import React from "react";
import WeatherParam from "./WeatherParam";
import { useTranslation } from "react-i18next";

const SunMoon = ({ sunRise, sunSet, moonRise, moonSet }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white p-3 flex flex-col">
      <div className="mb-4">{t("sunRiseSet")}</div>

      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 mr-6">
          <div className="pb-3 border-b-2 border-gray-300">
            <img
              className="w-10 h-10"
              src="https://www.accuweather.com/images/weathericons/01.svg"
              alt="sun"
            />
          </div>
          <WeatherParam title={t("rise")} value={sunRise} />
          <WeatherParam title={t("set")} value={sunSet} />
        </div>

        <div className="flex flex-col w-1/2">
          <div className="pb-3 border-b-2 border-gray-300">
            <img
              className="w-10 h-10"
              src="	https://www.accuweather.com/images/weathericons/33.svg"
              alt="moon"
            />
          </div>
          <WeatherParam title={t("rise")} value={moonRise} />
          <WeatherParam title={t("set")} value={moonSet} />
        </div>
      </div>
    </div>
  );
};

export default SunMoon;
