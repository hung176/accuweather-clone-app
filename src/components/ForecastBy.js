import React from "react";

export default function ForecastBy({ type, isActive, onNavigate, value }) {
  return (
    <div
      className={`text-md text-center py-4 ${
        type === "today" ? "mr-4" : "mx-4"
      } cursor-pointer text-gray-500 font-medium ${
        isActive ? "border-b-2 border-red-400" : ""
      }`}
      onClick={() => onNavigate(value)}
    >
      {type.toUpperCase()}
    </div>
  );
}
