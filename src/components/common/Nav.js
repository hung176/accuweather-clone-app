import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SunIcon, MenuAlt3Icon } from '@heroicons/react/solid';
import countries from 'i18n-iso-countries';
import { capitalizeFirstLetter } from '../../ultils/capitalizeFirstLetter';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Nav = ({ locationName, pos, navInfor }) => {
  const navigate = useNavigate();

  const [moveScroll, setMoveScroll] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setMoveScroll(true);
    } else {
      setMoveScroll(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const { pathname } = useLocation();
  const isShowBackground = moveScroll || pathname !== '/';
  const isForecastPage = pathname !== '/';

  return (
    <div className={`w-full ${isShowBackground ? `bg-accu ${pos} top-0 z-50` : 'bg-transparent'} flex justify-center`}>
      <div className="w-full sm:w-4/5 p-4 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div>
            <SunIcon className="h-8 w-8 text-red-500"/>
          </div>
          <div className="ml-1 text-2xl text-white font-bold">
            {locationName ? locationName : 'AccuWeather'}
          </div>
          {isForecastPage && (
            <div className="flex items-center text-white ml-4">
              <span>{`${capitalizeFirstLetter(navInfor.city)}, ${countries.getName(navInfor.country, "en")} ${navInfor.temperature}`}</span>
              <img className="w-6 h-6 ml-3" src={navInfor.weatherIcon} alt="icon-nav" />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          {/* {isForecastPage && (
            <Search />
          )} */}
          <MenuAlt3Icon className="h-8 w-8 text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;