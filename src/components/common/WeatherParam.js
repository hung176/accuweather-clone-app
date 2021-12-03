import React from "react";

const WeatherParam = ({ title, value }) => {
  return (
    <div className="border-b-2 border-gray-200 flex justify-between items-center py-3">
      <span className="text-sm">{title}</span>
      <span className="font-medium text-base">{value}</span>
    </div>
  );
};

export default WeatherParam;
