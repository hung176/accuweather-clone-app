import React, { createContext, useReducer, useContext } from 'react';
import currentLocationReducer, { currentLocaitonInitialState } from './currentLocationReducer';
import topCitiesReducer, { topCitiesInitialState } from './topCitiesReducer';
import autocompleteReducer, { autocompleteInitialState } from './autocompleteReducer';
import historyLocationReducer, { historyLocationInitialState } from './historyLocationReducer';
import currentWeatherReducer, { currentWeatherInitialState } from './currentWeatherReducer';
import oneDayForecastReducer, { oneDayForecastInitialState } from './oneDayForecastReducer';
import unitsReducer, { unitsInitialState } from './unitsReducers';

const mainReducer = ({
  currentLocation,
  topCities,
  autocomplete,
  historyLocation,
  currentWeather,
  oneDayForecast,
  units,
}, action) => ({
  currentLocation: currentLocationReducer(currentLocation, action),
  topCities: topCitiesReducer(topCities, action),
  autocomplete: autocompleteReducer(autocomplete, action),
  historyLocation: historyLocationReducer(historyLocation, action),
  currentWeather: currentWeatherReducer(currentWeather, action),
  oneDayForecast: oneDayForecastReducer(oneDayForecast, action),
  units: unitsReducer(units, action),
});

export const mainInitialState = {
  currentLocation: currentLocaitonInitialState,
  topCities: topCitiesInitialState,
  autocomplete: autocompleteInitialState,
  historyLocation: historyLocationInitialState,
  currentWeather: currentWeatherInitialState,
  oneDayForecast: oneDayForecastInitialState,
  units: unitsInitialState,
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