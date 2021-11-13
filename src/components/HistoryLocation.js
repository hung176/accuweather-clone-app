import React from 'react';

const HistoryLocation = ({ location }) => {
  return (
    <div className="px-4 py-2 mb-2 bg-black opacity-70 rounded-md shadow-lg text-white hover:opacity-90 trasition duration-200 ease-in-out cursor-pointer flex justify-between items-center">
      <span className="mr-6">{`${location.cityName}, ${location.country.name}`}</span>
      <div className="flex justify-end items-center w-20">
        <img className="w-6 h-6 mr-2" src={location.weatherIcon} />
        <span>{`${location.temperature.Metric.Value}°${location.temperature.Metric.Unit}`}</span>
      </div>
    </div>
  );
};

export default HistoryLocation;
