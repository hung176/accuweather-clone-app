import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentLocation } from '../reducers/currentLocationReducer';
import { getAutocompleteSearch } from '../reducers/autocompleteReducer';
import { REMOVE_AUTOCOMPLETE_SEARCH } from '../reducers/autocompleteReducer';
import { useStateValue } from '../reducers';
import { SearchIcon, XIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { removeSpaces } from '../ultils/removeSpaces';

const Search = ({  }) => {
  const [border, setBorder] = React.useState('rounded-md');
  const [showOption, setShowOption] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();

  const [{ autocomplete }, dispatch] = useStateValue();

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
    getAutocompleteSearch({query: e.target.value, dispatch});
  };

  const goToCitySearched = (location) => {
    const { countryId, localizedName, locationKey } = location;
    navigate(`en/${removeSpaces(countryId)}/${removeSpaces(localizedName)}/current/${locationKey}`);
  };

  return (
    <div className="max-w-4xl w-3/4 mx-auto mt-10 relative">
      <div className={`h-14 bg-white flex items-center ${border} px-4`}>
        <SearchIcon
          className="w-8 h-8 text-gray-600"
        />
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          placeholder="Search Location"
          autoComplete="off"
          className="ml-3 w-full h-full text-xl focus:outline-none"
          onFocus={onFocus}
          onBlur={onBlur}
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
        <div className="bg-white rounded-b-md w-full flex items-center text-gray-400 absolute z-40">
          <ul className="w-full">
            <li
              className="flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-600"
              onMouseDown={handleCurrentLocation}
            >
              <LocationMarkerIcon className="w-6 h-6 text-red-400 mr-2" />
              <span className=" font-light">Use your current location</span>
            </li>

            {autocomplete.map(lo => (
              <li
                key={lo.locationKey}
                className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-600`}
                onMouseDown={() => goToCitySearched(lo)}
              >
                <span className="text-xl">{`${lo.localizedName}, ${lo.administrativeArea.LocalizedName}, ${lo.countryId}`}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default Search;
