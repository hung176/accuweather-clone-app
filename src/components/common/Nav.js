import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SunIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import countries from "i18n-iso-countries";
import { capitalizeFirstLetter } from "../../ultils/capitalizeFirstLetter";
import Search from "../search/Search";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Nav = ({ pos, navInfor, showSideBar, isShowSideBar }) => {
  const navigate = useNavigate();

  const [moveScroll, setMoveScroll] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 0) {
      setMoveScroll(true);
    } else {
      setMoveScroll(false);
    }
  };
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const isShowBackground = moveScroll || !isHomePage;
  if (isHomePage) {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <div
      className={`w-full h-20 ${
        isShowBackground
          ? `bg-accu ${pos} top-0 z-40`
          : `${isShowSideBar ? "bg-accu sm:bg-transparent" : "bg-transparent"}`
      } flex justify-center`}
    >
      <div className="w-full sm:w-4/5 p-4 flex justify-between items-center">
        <div
          className="flex flex-1 items-center cursor-pointer"
          onClick={() => {
            showSideBar(false);
            navigate("/");
          }}
        >
          <div>
            <SunIcon className="h-8 w-8 text-red-500" />
          </div>
          <div
            className={`${
              isHomePage ? "block" : "hidden md:block"
            } ml-1 md:text-xl text-white font-bold`}
          >
            AccuWeather
          </div>
          {!isHomePage && navInfor && (
            <div className="flex items-center text-white ml-4">
              <span className="truncate">{`${capitalizeFirstLetter(
                navInfor?.city
              )}, ${countries.getName(navInfor?.country, "en")} ${
                navInfor?.temperature ? navInfor?.temperature : ""
              }`}</span>
              {navInfor.weatherIcon && (
                <img
                  className="w-6 h-6 ml-1"
                  src={navInfor.weatherIcon}
                  alt="icon-nav"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex sm:w-1/2 justify-end items-center">
          <div className="hidden sm:block sm:w-3/4 mr-3">
            {!isHomePage && <Search small showSideBar={showSideBar} />}
          </div>
          <MenuAlt3Icon
            className="h-10 w-10 text-white cursor-pointer"
            onClick={() => showSideBar(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
