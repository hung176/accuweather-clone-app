import React from 'react';

const WeatherHeader = ({ header, time }) => {
  return (
    <div className="mb-2 w-full flex justify-between">
      <span>{header}</span>
      <span className="text-gray-500">{time}</span>
    </div>
  );
};

export default WeatherHeader;
