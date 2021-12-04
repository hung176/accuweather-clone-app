import React from "react";
import AccordionCard from "../common/AccordionCard";
import ShowError from "../common/ShowError";
import { twelveHourlyParamsIndex } from "../../consts/weatherParamsIndex";

const TwelveHourlyWeather = ({ twelveHourly }) => {
  const { error, conditions } = twelveHourly;

  if (error) {
    return <ShowError error={error} />;
  }
  return (
    <div className="">
      {conditions.map((tw, i) => (
        <AccordionCard
          key={`${tw.date}-${i}`}
          params={tw}
          paramsIndex={twelveHourlyParamsIndex}
        />
      ))}
    </div>
  );
};

export default TwelveHourlyWeather;
