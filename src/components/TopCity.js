import React from 'react';

const TopCity = ({ city }) => {
  return (
    <div className="bg-white p-3 mt-1 hover:bg-gray-200 hover:text-gray-600 cursor-pointer flex justify-between items-center">
      <div>{city.cityName}</div>
      <div className="w-1/3 flex items-center justify-between">
        <img className="w-8 h-8" src={city.weatherIcon} alt={city.weatherText} />
        <span>{`${city.temperature.Metric.Value}°`}</span>
      </div>
    </div>
  );
};

export default TopCity;
