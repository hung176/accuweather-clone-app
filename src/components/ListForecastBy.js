import React from "react";
import ForecastBy from "./ForecastBy";
import { useTranslation } from "react-i18next";

export default function ListForecastBy({ forecastType, onNavigate }) {
  const { t } = useTranslation();
  const forecastByArr = [t("today"), t("hourly"), t("daily")];
  const forecastValue = ["today", "hourly", "daily"];

  return (
    <div className="w-full border-b border-gray-500 flex justify-start">
      <div className="px-2 text-xs sm:text-sm sm:px-0 flex justify-start items-center overflow-x-auto">
        {forecastByArr.map((type, index) => (
          <ForecastBy
            key={type}
            type={type}
            value={forecastValue[index]}
            isActive={forecastValue[index] === forecastType}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
