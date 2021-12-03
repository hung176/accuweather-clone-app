import React from "react";
import WeatherParam from "./WeatherParam";

const ListWeatherParams = ({ weatherArr }) => {
  return (
    <div className="w-full sm:h-64 flex flex-col items-start content-between  flex-wrap overflow-hidden">
      {weatherArr.map((p) => (
        <div key={p.name} className="w-full sm:w-8/17">
          <WeatherParam title={p.name} value={p.value} />
        </div>
      ))}
    </div>
  );
};

export default ListWeatherParams;
