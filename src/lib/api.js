import axios from "./axios";
import { apiKey } from "../consts/api";

export const getCurrentLocationApi = (latitude, longtitude) =>
  axios.get(
    `/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longtitude}`
  );

export const getLocationByKeyApi = (locationKey, lang = "en-us") =>
  axios.get(`/locations/v1/${locationKey}?apikey=${apiKey}&language=${lang}`);

export const getTopCitiesApi = (quantity, lang = "en-us") =>
  axios.get(
    `/currentconditions/v1/topcities/${quantity}?apikey=${apiKey}&language=${lang}`
  );

export const getAutocompleteApi = (query, lang = "en-us") =>
  axios.get(
    `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}&language=${lang}`
  );

export const getCurrentWeatherApi = (locationKey, lang = "en-us") =>
  axios.get(
    `/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=${lang}&details=true`
  );

export const getOneDayForecastApi = (locationKey, isMetric, lang = "en-us") =>
  axios.get(
    `/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`
  );

export const getFiveDayWeatherApi = (locationKey, isMetric, lang = "en-us") =>
  axios.get(
    `/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`
  );

export const getHourlyOneWeatherApi = (locationKey, lang, isMetric) =>
  axios.get(
    `/forecasts/v1/hourly/1hour/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`
  );

export const getHourlyTwelveWeatherApi = (
  locationKey,
  isMetric,
  lang = "en-us"
) =>
  axios.get(
    `/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`
  );

export const getLocationByIpApi = (ipAddress) =>
  axios.get(`/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${ipAddress}`);

export const getIpAddressApi = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const { ip } = await response.json();
  return ip;
};

export const getNeighborCitiesApi = (locationKey, lang = "en-us") =>
  axios.get(`/locations/v1/cities/neighbors/${locationKey}?apikey=${apiKey}`);
