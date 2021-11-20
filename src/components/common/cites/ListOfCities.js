import React from 'react';
import City from './City';

const ListOfCities = ({ cities, setLocationKeyStorage }) => {
  return (
    <div className="w-full sm:w-4/5">
      {cities.map(city => (
        <div
          key={city.cityName}
          onClick={() => setLocationKeyStorage(city.locationKey)}
        >
          <City city={city} />
        </div>
      ))}
    </div>
  );
};

export default ListOfCities;
