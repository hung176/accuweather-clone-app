import React from 'react';
import TopCity from './TopCity';

const ListTopCities = ({ cities }) => {
  console.log(cities)
  return (
    <div className="w-full sm:w-4/5">
      {cities.map(city => (
        <TopCity
          key={city.cityName}
          city={city}
        />
      ))}
    </div>
  );
};

export default ListTopCities;
