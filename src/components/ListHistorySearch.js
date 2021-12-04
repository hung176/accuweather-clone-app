import React from "react";
import { useStateValue } from "../reducers";
import { useNavigate } from "react-router-dom";
import { removeSpaces } from "../ultils/removeSpaces";
import HistoryLocation from "./HistoryLocation";

const ListHistoryLocations = () => {
  const [{ historyWeather }] = useStateValue();
  const navigate = useNavigate();

  const handleNavigate = (location) => {
    const { cityName, country, locationKey } = location;
    navigate(
      `/${removeSpaces(country.id)}/${removeSpaces(
        cityName
      )}/current/${locationKey}`
    );
  };

  return (
    <div className="mx-auto py-2 flex flex-col justify-center md:flex-row md:justify-between md:flex-wrap">
      {historyWeather.map((location) => (
        <div
          key={location.locationKey}
          onClick={() => handleNavigate(location)}
        >
          <HistoryLocation location={location} />
        </div>
      ))}
    </div>
  );
};

export default ListHistoryLocations;
