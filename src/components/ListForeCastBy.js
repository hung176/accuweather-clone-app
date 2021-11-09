import React from 'react';
import ForeCastBy from './ForeCastBy';

export default function ListForeCastBy() {
  const foreCastByArr = ['today', 'hourly', 'daily', 'radar', 'monthly', 'air quality'];
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-2 text-xs sm:text-sm sm:w-4/5 sm:px-0  flex justify-start items-center overflow-x-auto">
        {foreCastByArr.map(foreCast => (
          <ForeCastBy key={foreCast} foreCast={foreCast} />
        ))}
      </div>
    </div>
  )
}
