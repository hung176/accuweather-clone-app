import axios from './axios';
import { apiKey1, apiKey2, apiKey3 } from '../consts/api';
import { random } from '../ultils/random';
import { pickCurrentWeatherData } from '../ultils/pickData';

const apiKey = random([apiKey1, apiKey2, apiKey3]);

export const getCurrentLocationApi = (latitude, longtitude) => axios.get(`/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longtitude}`);

export const getTopCitiesApi = (quantity) => axios.get(`/currentconditions/v1/topcities/${quantity}?apikey=${apiKey}`);

export const getAutocompleteApi = (query) => axios.get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`);

export const getCurrentWeatherApi = (locationKey, lang = "en-us") => axios.get(`/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=${lang}&details=true`);

export const getOneDayForecastApi = (locationKey, isMetric, lang = "en-us") => axios.get(`/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`);

export const getDailyFiveWeatherApi = (locationKey, lang, isMetric) => axios.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`);

export const getHourlyOneWeatherApi = (locationKey, lang, isMetric) => axios.get(`/forecasts/v1/hourly/1hour/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`);

export const getHourlyTwelveWeatherApi = (locationKey, lang, isMetric) => axios.get(`/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}&language=${lang}&details=true&metric=${isMetric}`);
