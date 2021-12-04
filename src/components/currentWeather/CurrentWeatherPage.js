import React from "react";
import Card from "../common/Card";
import SunMoon from "../common/SunMoon";
import {
  currentParamsIndex,
  dayParamsIndex,
  nightParamsIndex,
} from "../../consts/weatherParamsIndex";
import ShowError from "../common/ShowError";
import { useTranslation } from "react-i18next";

const CurrentWeatherPage = ({ currentWeather, oneDayForecast }) => {
  const { t } = useTranslation();
  const {
    loading: currentLoading,
    error: currentError,
    conditions: currentConditions,
  } = currentWeather;
  const {
    loading: oneDayLoading,
    error: oneDayError,
    conditions: oneDayConditions,
  } = oneDayForecast;

  if (currentError || oneDayError) {
    return <ShowError error={currentError} />;
  }
  return (
    <div>
      <Card
        header={t("currentWeather")}
        loading={currentLoading}
        error={currentError}
        conditions={currentConditions}
        paramsIndex={currentParamsIndex}
      />
      <Card
        header={t("day")}
        loading={oneDayLoading}
        error={oneDayError}
        conditions={oneDayConditions.dayForecast || {}}
        paramsIndex={dayParamsIndex}
      />
      <Card
        header={t("night")}
        loading={oneDayLoading}
        error={oneDayError}
        conditions={oneDayConditions.nightForecast || {}}
        paramsIndex={nightParamsIndex}
      />
      <SunMoon
        sunRise={oneDayConditions.sunRise}
        sunSet={oneDayConditions.sunSet}
        moonRise={oneDayConditions.moonRise}
        moonSet={oneDayConditions.moonSet}
      />
    </div>
  );
};

export default CurrentWeatherPage;
