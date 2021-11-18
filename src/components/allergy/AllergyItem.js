import React from 'react';

const AllergyItem = ({ allergyItem }) => {
  const { icon, name, category } = allergyItem;
  const alertAirColor = (title, status) => {
    if (title === 'Air Quality' && status === 'Good') {
      return 'text-green-500';
    }
    return '';
  }
  return (
    <div className="border-gray-200 border-b-2 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-6 h-6" src={icon} alt="icon-allergy" />
        <span className={`ml-2 `}>{name}</span>
      </div>
      <div className={`${alertAirColor(name, category)} text-lg`}>{category}</div>
    </div>
  );
};

export default AllergyItem;