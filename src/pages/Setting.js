import React from 'react';
import Nav from '../components/common/Nav';
import SettingItem from '../components/SettingItem';
import { changeUnits } from '../reducers/unitsReducers';
import { useStateValue } from '../reducers';

const Setting = () => {
  const [, dispatch] = useStateValue();
  const units = window.localStorage.getItem('units') || 'metric';
  const settings = [
    {
      title: "Language",
      options: [
        {label: 'English', value: 'en'},
        {label: 'Vietnamese', value: 'vi'},
      ]
    },
    {
      title: "Units",
      options: [
        {label: 'Metric (°C, km/h, mm)', value: 'metric'},
        {label: 'Imperial (°F, mph, in)', value: 'imperial'},
      ]
    }
  ];

  const unitArr = ['metric', 'imperial'];

  const handleChange = (value) => {
    if (unitArr.includes(value)) {
      changeUnits({ dispatch, units: value });
    }
  };

  return (
    <div>
      <Nav />
      <div className="w-full mt-8 flex justify-center items-center">
        <div className="w-3/4">
          <div className="w-full sm:w-3/4 p-3 bg-white">
            <div className="text-2xl font-medium mb-4">Setting</div>
            {settings.map(s => (
              <div className="py-2 border-b-2 border-gray-200">
                <SettingItem
                  key={s.title}
                  title={s.title}
                  options={s.options}
                  value={s.title === 'Units' ? units : 'en'}
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