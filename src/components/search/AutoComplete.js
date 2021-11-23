import React from 'react';
import { useStateValue } from '../../reducers';

const AutoComplete = ({ goToCitySearched }) => {
  const [{ autocomplete },] = useStateValue();

  return (
    <ul className="w-full bg-white">
      {autocomplete.map(lo => (
        <li
          key={lo.locationKey}
          className={`flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-600`}
          onMouseDown={() => goToCitySearched(lo)}
        >
          <span className={`text-xl`}>{`${lo.localizedName}, ${lo.administrativeArea.LocalizedName}, ${lo.countryId}`}</span>
        </li>
      ))}
    </ul>
  );
};

export default AutoComplete;
