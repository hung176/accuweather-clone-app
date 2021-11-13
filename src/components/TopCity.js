import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../reducers';
import { addToHistoryLocation } from '../reducers/historyLocationReducer';
import { removeSpaces } from '../ultils/removeSpaces';

const TopCity = ({ city }) => {
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();

  const goToWeatherCity = (city) => {
    const { country, cityName, locationKey } = city;
    navigate(`/en/${removeSpaces(country.id)}/${removeSpaces(cityName)}/current/${locationKey}`);
    addToHistoryLocation({ dispatch, location: city });
  };
  return (
    <div
      className="bg-white p-3 mt-1 hover:bg-gray-300 hover:text-gray-600 cursor-pointer flex justify-between items-center"
      onClick={() => goToWeatherCity(city)}
    >
      <div>{city.cityName}</div>
      <div className="w-1/3 flex items-center justify-between">
        <img className="w-8 h-8" src={city.weatherIcon} alt={city.weatherText} />
        <span>{`${city.temperature.Metric.Value}°`}</span>
      </div>
    </div>
  );
};

export default TopCity;
