import React from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { WaterDropIcon } from '../../icons';

const HeaderCard = ({
  params,
  rotate,
  onAction,
}) => {
  const { forecastType } = useParams();

  const isHourly = forecastType === 'hourly';
  const isDaily = forecastType === 'daily';
  return (
    <div
      className="w-full flex justify-between items-center cursor-pointer group"
      onClick={onAction}
    >
      <div
        className="flex-1 flex justify-between items-center"
      >
        <div className=" flex-1 flex justify-start items-center">
          <div className="flex flex-col w-16">
            <span className="text-base">{params.time}</span>
            <span className="text-gray-400 text-sm">{params.date}</span>
          </div>
          <img className="w-16 h-16" src={params.weatherIcon} alt="weather icon" />
          <div className={`text-4xl ${isDaily ? 'w-40' : 'w-32'} text-gray-600 text-center`}>{params.temperature}</div>
          {isHourly && (
            <div className="text-sm text-center flex-1 text-gray-400">{`RealFeel® ${params.realFeel}`}</div>
          )}
        </div>
        <div className={`hidden ${isDaily ? 'w-40' : 'w-28'} sm:block text-center break-words`}>{params.weatherText}</div>
      </div>

      <div className="w-1/7 flex justify-between items-center ml-2">
        <div className="flex items-center">
          <WaterDropIcon />
          <span className="text-gray-500 text-sm mr-1 sm:mr-auto">{params.rainProbability}</span>
        </div>
        {isHourly && (
          <ChevronDownIcon className={`w-5 h-5 flex-shrink-0 ${rotate} text-gray-500 transition-transform`} />
        )}
        {isDaily && (
          <ArrowRightIcon className={`w-5 h-5 flex-shrink-0 text-gray-500 hidden group-hover:block`} />
        )}
      </div>
    </div>
  );
};

export default HeaderCard;
