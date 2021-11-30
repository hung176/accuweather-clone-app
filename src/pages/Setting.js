import React from "react";
import Nav from "../components/common/Nav";
import SettingItem from "../components/SettingItem";
import { changeUnits } from "../reducers/unitsReducers";
import { changeLang } from "../reducers/langReducer";
import { useStateValue } from "../reducers";

const Setting = ({ showSideBar }) => {
  const [, dispatch] = useStateValue();
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en-us";
  const settings = [
    {
      title: "Language",
      options: [
        { label: "English", value: "en-us" },
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
    console.log(value);
    if (unitArr.includes(value)) {
      changeUnits({ dispatch, units: value });
    } else {
      changeLang({ dispatch, lang: value });
    }
  };

  return (
    <div>
      <Nav showSideBar={showSideBar} />
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
