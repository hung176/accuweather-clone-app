import React from "react";
import { useLocation } from "react-router";
import Nav from "../components/common/Nav";
import SettingItem from "../components/SettingItem";
import { changeUnits } from "../reducers/unitsReducers";
import { changeLang } from "../reducers/langReducer";
import { useStateValue } from "../reducers";
import { removeSpaces } from "../ultils/removeSpaces";

const Setting = ({ showSideBar }) => {
  const [, dispatch] = useStateValue();
  const {
    state: { country, cityName },
  } = useLocation();
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en";
  const settings = [
    {
      title: "Language",
      options: [
        { label: "English", value: "en" },
        { label: "Vietnamese", value: "vi" },
      ],
    },
    {
      title: "Units",
      options: [
        { label: "Metric (°C, km/h, mm)", value: "metric" },
        { label: "Imperial (°F, mph, in)", value: "imperial" },
      ],
    },
  ];

  const unitArr = ["metric", "imperial"];

  const handleChange = (value) => {
    if (unitArr.includes(value)) {
      changeUnits({ dispatch, units: value });
    } else {
      changeLang({ dispatch, lang: value });
    }
  };

  const navInfor = {
    country: removeSpaces(country.id),
    city: removeSpaces(cityName),
  };

  return (
    <div>
      <Nav showSideBar={showSideBar} navInfor={navInfor} />
      <div className="w-full mt-8 flex justify-center items-center">
        <div className="w-3/4">
          <div className="w-full sm:w-3/4 p-3 bg-white">
            <div className="text-2xl font-medium mb-4">Setting</div>
            {settings.map((s) => (
              <div className="py-2 border-b-2 border-gray-200">
                <SettingItem
                  key={s.title}
                  title={s.title}
                  options={s.options}
                  value={s.title === "Units" ? units : lang}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
