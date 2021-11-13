import React from 'react';
import ForecastBy from './ForecastBy';

export default function ListForecastBy({ forecastType, onNavigate }) {
  const forecastByArr = ['today', 'hourly', 'daily', 'radar', 'monthly'];

  return (
    <div className="w-full border-b border-gray-500 flex justify-start">
      <div className="px-2 text-xs sm:text-sm sm:px-0 flex justify-start items-center overflow-x-auto">
        {forecastByArr.map(type => (
          <ForecastBy
            key={type}
            type={type}
            isActive={type === forecastType}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  )
}
