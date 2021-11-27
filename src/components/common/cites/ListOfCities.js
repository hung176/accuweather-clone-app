import React from 'react';
import City from './City';

const ListOfCities = ({ cities }) => {
  return (
    <div className="w-full sm:w-4/5">
      {cities.map(city => (
        <div
          key={city.cityName}        >
          <City city={city} />
        </div>
      ))}
    </div>
  );
};

export default ListOfCities;
