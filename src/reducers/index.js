import React, { createContext, useReducer, useContext } from "react";
import currentLocationReducer, {
  currentLocaitonInitialState,
} from "./currentLocationReducer";
import topCitiesReducer, { topCitiesInitialState } from "./topCitiesReducer";
import autocompleteReducer, {
  autocompleteInitialState,
} from "./autocompleteReducer";
import currentWeatherReducer, {
  currentWeatherInitialState,
} from "./currentWeatherReducer";
import oneDayForecastReducer, {
  oneDayForecastInitialState,
} from "./oneDayForecastReducer";
import twelveHourlyReducer, {
  twelveHourlyInitialState,
} from "./twelveHourlyReducer";
import fiveDayReducer, { fiveDayInitialState } from "./fiveDayReducer";
import historyWeatherReducer, {
  historyWeatherInitialState,
} from "./historyWeatherReducer";
import unitsReducer, { unitsInitialState } from "./unitsReducers";
import langReducer, { langInitialState } from "./langReducer";

const mainReducer = (
  {
    currentLocation,
    topCities,
    autocomplete,
    currentWeather,
    oneDayForecast,
    twelveHourly,
    fiveDay,
    historyWeather,
    units,
    lang,
  },
  action
) => ({
  currentLocation: currentLocationReducer(currentLocation, action),
  topCities: topCitiesReducer(topCities, action),
  autocomplete: autocompleteReducer(autocomplete, action),
  currentWeather: currentWeatherReducer(currentWeather, action),
  oneDayForecast: oneDayForecastReducer(oneDayForecast, action),
  twelveHourly: twelveHourlyReducer(twelveHourly, action),
  fiveDay: fiveDayReducer(fiveDay, action),
  historyWeather: historyWeatherReducer(historyWeather, action),
  units: unitsReducer(units, action),
  lang: langReducer(lang, action),
});

export const mainInitialState = {
  currentLocation: currentLocaitonInitialState,
  topCities: topCitiesInitialState,
  autocomplete: autocompleteInitialState,
  currentWeather: currentWeatherInitialState,
  oneDayForecast: oneDayForecastInitialState,
  twelveHourly: twelveHourlyInitialState,
  fiveDay: fiveDayInitialState,
  historyWeather: historyWeatherInitialState,
  units: unitsInitialState,
  lang: langInitialState,
};

export default mainReducer;

const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
