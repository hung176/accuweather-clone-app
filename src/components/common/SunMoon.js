import React from 'react';
import WeatherParam from './WeatherParam';

const SunMoon = ({
  sunRise,
  sunSet,
  moonRise,
  moonSet,
}) => {
  return (
    <div className="w-full bg-white p-3 flex flex-col">
      <div className="mb-4">SUNRISE/SUNSET</div>

      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 mr-6">
          <div className="pb-3 border-b-2 border-gray-300">
            <img className="w-10 h-10" src="https://www.accuweather.com/images/weathericons/01.svg" alt="sun" />
          </div>
          <WeatherParam title="Rise" value={sunRise} />
          <WeatherParam title="Set" value={sunSet} />
        </div>

        <div className="flex flex-col w-1/2">
          <div className="pb-3 border-b-2 border-gray-300">
            <img className="w-10 h-10" src="	https://www.accuweather.com/images/weathericons/33.svg" alt="moon" />
          </div>
          <WeatherParam title="Rise" value={moonRise} />
          <WeatherParam title="Set" value={moonSet} />
        </div>
      </div>
    </div>
  );
};

export default SunMoon;
