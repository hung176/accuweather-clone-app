import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentLocation } from '../../reducers/currentLocationReducer';
import { getAutocompleteSearch } from '../../reducers/autocompleteReducer';
import { REMOVE_AUTOCOMPLETE_SEARCH } from '../../reducers/autocompleteReducer';
import { useStateValue } from '../../reducers';
import { SearchIcon, XIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import AutoComplete from './AutoComplete';
import RecentSearch from './RecentSearch ';

const Search = ({ small, isForecastPage }) => {
  const [border, setBorder] = React.useState('rounded-md');
  const [showOption, setShowOption] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const [, dispatch] = useStateValue();

  const onFocus = (e) => {
    setBorder('rounded-t-md border-b-2 border-red-400');
    setShowOption(true);
  };
  const onBlur = (e) => {
    setBorder('rounded-md');
    setShowOption(false);
  };

  const handleCurrentLocation = () => {
    getCurrentLocation({ dispatch, navigate });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    // getAutocompleteSearch({query: e.target.value, dispatch});
  };

  const goToCitySearched = (location) => {
    const { countryId, localizedName, locationKey } = location;


      navigate(-1);
    
  };

  return (
    <div className="w-full relative">
      <div className={`bg-white ${small ? 'h-11' : ''} flex items-center ${border} py-2 px-4 `}>
        <SearchIcon className="w-8 h-8 mr-1" />
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          placeholder="Search Location"
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full p-2 ${small ? 'text-sm' : 'text-2xl'} focus:outline-none`}
        />
        {query && (
          <XIcon
            className="w-8 h-8 text-gray-600"
            onClick={() => {
              dispatch({
                type: REMOVE_AUTOCOMPLETE_SEARCH,
              });
              setQuery('');
            }}
          />
        )}
      </div>

      {showOption && (
        <div className="rounded-b-md bg-white w-full flex flex-col items-center text-gray-400 absolute z-40">
          <div
            className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            onMouseDown={handleCurrentLocation}
          >
            <LocationMarkerIcon className="w-6 h-6 text-red-400 mr-2" />
            <span className={`font-light`}>Use your current location</span>
          </div>
          
          <AutoComplete
            goToCitySearched={goToCitySearched}
          />

          {!query && isForecastPage && (
            <div className="w-full">
              <div className="px-4 font-semibold text-lg">Recent</div>

              <div className="p-4 border-t-2 border-gray-200">
                <RecentSearch
                  cityName='Hanoi'
                  countryName="Vietnam"
                  weatherIcon='https://www.accuweather.com/images/weathericons/06.svg'
                  temperature='29'
                />
              </div>
            </div>
          )}
        </div>
      )}

    </div>
    
  );
};

export default Search;
