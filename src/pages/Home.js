import React, { useState, useEffect } from 'react';
import { randomImg } from '../ultils/randomImg';
import { getTopCities } from '../reducers/topCitiesReducer';
import { useStateValue } from '../reducers';
import Search from '../components/Search';
import Nav from '../components/Nav';
import ListHistorySearch from '../components/ListHistorySearch';
import ListTopCities from '../components/ListTopCities';

const Home = () => {
  const [{ topCities: { loading, error, cities } }, dispatch] = useStateValue();

  useEffect(() => {
    getTopCities({ quantity: 50, dispatch });

  }, []);

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center border-b-2 border-red-400"
        style={{ backgroundImage: `url(${randomImg()})`}}
      >
        <Nav pos="fixed" />
        <div className="mt-12 pt-2">
          <Search />
        </div>


        <div className="pb-28 pt-4">
          <ListHistorySearch />
        </div>
      </div>

      <div className="w-full bg-gray-100">
        {loading && <div>loading...</div>}
        {cities.length && (
          <div className="pb-4 w-full flex flex-col items-center">
            <div className="text-gray-500 font-semibold uppercase w-full sm:w-4/5 mt-10 mb-2">Top Cities Weather Conditions</div>
            <ListTopCities cities={cities} />
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default Home;
