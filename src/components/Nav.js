import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SunIcon, MenuAlt3Icon } from '@heroicons/react/solid';

const Nav = ({ locationName, pos }) => {

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

  return (
    <div className={`w-full ${isShowBackground ? `bg-accu ${pos} top-0 z-50` : 'bg-transparent'} flex justify-center`}>
      <div className="w-full sm:w-4/5 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <SunIcon className="h-8 w-8 text-red-500"/>
          </div>
          <div className="ml-1 text-2xl text-white font-bold">
            {locationName ? locationName : 'AccuWeather'}
          </div>
        </div>

        <div>
          <MenuAlt3Icon className="h-8 w-8 text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;