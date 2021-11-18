import React from 'react';

const WeatherRealFeel = ({ realFeel, realFeelShade }) => {
  return (
    <div className="w-1/2 flex flex-col items-center">
      <span>{`RealFeel® ${realFeel}`}</span>
      <span>{`RealFeel Shade™ ${realFeelShade}`}</span>
    </div>
  );
};

export default WeatherRealFeel;