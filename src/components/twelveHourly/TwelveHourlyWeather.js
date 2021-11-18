import React from 'react';
import AccordionCard from '../common/AccordionCard';
import { twelveHourlyParamsIndex } from '../../consts/weatherParamsIndex';

const TwelveHourlyWeather = ({ twelveHourly }) => {
  const { loading, error, conditions } = twelveHourly;

  return (
    <div className="">
      {conditions.map((tw, i) => (
        <AccordionCard key={`${tw.date}-${i}`} params={tw} paramsIndex={twelveHourlyParamsIndex} />
      ))}
    </div>
  );
};

export default TwelveHourlyWeather;