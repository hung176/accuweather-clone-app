import React, { useState, useEffect } from 'react';
import { getCurrentLocation } from '../reducers/currentLocationReducer';
import { useStateValue } from '../reducers';
import { SearchIcon, XIcon, LocationMarkerIcon } from '@heroicons/react/outline';

import { baseApiUrl, apiKey } from '../consts/api';

const Search = ({  }) => {
  const [border, setBorder] = React.useState('rounded-md');
  const [showOption, setShowOption] = React.useState(false);
  const [value, setValue] = React.useState('');
  const options = ['BacNinh, vietNam'];

  const [{ currentLocation }, dispatch] = useStateValue();
  console.log(currentLocation)

  const onFocus = (e) => {
    setBorder('rounded-t-md border-b-2 border-red-400');
    setShowOption(true);
  };
  const onBlur = (e) => {
    setBorder('rounded-md');
    setShowOption(false);
  };

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      getCurrentLocation({ lat, lon, dispatch });
    });
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Location"
          autoComplete="off"
          className="ml-3 w-full h-full text-xl focus:outline-none"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {value && (
          <XIcon
            className="w-8 h-8 text-gray-600"
            onClick={() => setValue('')}
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

            {options.map(op => (
              <li className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-600`}>
                <span className="text-xl" onClick={() => console.log('fdfdfdfd')}>{op}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default Search;
