import React, { createContext, useReducer, useContext } from 'react';
import currentLocationReducer, { currentLocaitonInitialState } from './currentLocationReducer';
import topCitiesReducer, { topCitiesInitialState } from './topCitiesReducer';

const mainReducer = ({
  currentLocation,
  topCities,
}, action) => ({
  currentLocation: currentLocationReducer(currentLocation, action),
  topCities: topCitiesReducer(topCities, action),
});

export const mainInitialState = {
  currentLocation: currentLocaitonInitialState,
  topCities: topCitiesInitialState,
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