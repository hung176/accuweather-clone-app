import React from 'react';

const RecentSearch = ({ cityName, countryName, weatherIcon, temperature }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col justify-center">
        <span className="font-semibold text-base">{cityName}</span>
        <span className="font-normal text-sm">{countryName}</span>
      </div>

      <div className="w-1/3 flex justify-between items-center">
        {weatherIcon && <img className="w-7 h-7 mr-2" src={weatherIcon} alt="icon" />}
        <span className="font-semibold text-xl">{temperature}</span>
      </div>
    </div>
  );
};

export default RecentSearch;
