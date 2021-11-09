import React from 'react';

const HistoryLocation = ({ location }) => {
  return (
    <div className="px-4 py-2 bg-black opacity-60 rounded-md shadow-lg text-white hover:opacity-80 trasition duration-200 ease-in-out cursor-pointer">
      {location}
    </div>
  );
};

export default HistoryLocation;
