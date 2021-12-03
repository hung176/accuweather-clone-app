import { getLocationByKeyApi, getCurrentWeatherApi } from "../lib/api";
import { pickCurrentWeatherData } from "../ultils/pickData";

export const GET_HISTORY_WEATHER = "GET_HISTORY_WEATHER";

export const historyWeatherInitialState = [];

export const getHistoryWeather = async ({ dispatch }) => {
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en";

  const locationKeyStorage =
    JSON.parse(window.localStorage.getItem("history")) || [];

  const historyWeathers = await Promise.all(
    locationKeyStorage.map(async (locationKey) => {
      const { data: locationInfo } = await getLocationByKeyApi(
        locationKey,
        lang
      );
      const { data: weatherInfo } = await getCurrentWeatherApi(
        locationKey,
        lang
      );

      return {
        locationKey,
        cityName: locationInfo.LocalizedName,
        country: {
          id: locationInfo.Country.ID,
          name: locationInfo.Country.LocalizedName,
        },
        temperature: pickCurrentWeatherData(weatherInfo).temperature[units],
        weatherText: pickCurrentWeatherData(weatherInfo).weatherText,
        weatherIcon: pickCurrentWeatherData(weatherInfo).weatherIcon,
      };
    })
  );
  dispatch({
    type: GET_HISTORY_WEATHER,
    payload: historyWeathers,
  });
};

export default function historyWeatherReducer(state, action) {
  switch (action.type) {
    case GET_HISTORY_WEATHER:
      return action.payload;

    default:
      return state;
  }
}
