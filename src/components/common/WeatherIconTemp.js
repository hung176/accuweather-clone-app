import React from 'react';

const WeatherIconTemp = ({ imgUrl, temp }) => {
  return (
    <div className="w-1/2 mr-4 flex justify-center items-center">
      <img className="w-14 h-14 mr-2" src={imgUrl} alt="icon-weather" />
      <span className="text-5xl">{temp}</span>
    </div>
  );
};

export default WeatherIconTemp;