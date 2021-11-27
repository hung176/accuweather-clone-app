import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CogIcon, XIcon } from '@heroicons/react/outline';
import { removeSpaces } from '../../ultils/removeSpaces';
import { getLocationByKeyApi } from '../../lib/api';

const SideDrawer = ({ show, showSideBar }) => {
  const forecastByArr = ['Today', 'Hourly', 'Daily'];
  const navigate = useNavigate();

  const [locationNewest, setLocationNewest] = useState({});

  const locationStore = localStorage.getItem('history');

  useEffect(() => {
    const getInfoNewestCity = async () => {
      let newestCityCode;
      if (locationStore) {
        newestCityCode = JSON.parse(locationStore)[0];
      };
      try {
        const { data } = await getLocationByKeyApi(newestCityCode);

        setLocationNewest({
          locationKey: data.Key,
          cityName: data.LocalizedName,
          countryId: data.Country.ID,
          countryName: data.Country.LocalizedName,
        });
      } catch (error) {
        console.log(error.message);
      }
      
    };

    getInfoNewestCity();
  }, [show]);

  const handleClickSideBar = (type) => {
    showSideBar(false);
    navigate(`/en/${locationNewest?.countryId}/${locationNewest?.cityName}/${type}/${locationNewest?.locationKey}`)
  };

  return (
    <div className={`h-screen p-4 sm:bg-white bg-accu sm:text-gray-700 text-white fixed top-20 sm:top-0 right-0 w-screen sm:w-80 z-50 shadow-2xl ${show ? 'translate-x-0' : 'translate-x-full'} transform  transition-transform`}>
      <div className="w-full flex justify-between items-center">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            showSideBar(false);
            navigate('/en/setting');
          }}
        >
          <CogIcon className="w-8 h-8 mr-2" />
          <span className="text-xl">Setting</span>
        </div>
        <div>
          <XIcon className="w-8 h-8 cursor-pointer" onClick={() => showSideBar(false)} />
        </div>
      </div>

      <div className="mt-4 py-2 font-medium text-xl border-b-2 border-gray-200">
        {`${locationNewest?.cityName}, ${locationNewest?.countryName} Weather`}
      </div>

      <ul className="h-1/3 flex flex-col items-start justify-evenly">
        {forecastByArr.map(fc => (
          <li
            key={fc}
            className={`list-none cursor-pointer`}
            onClick={() => handleClickSideBar(removeSpaces(fc))}
          >
            {fc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
