import React from 'react';

const ShowError = ({ error }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold mr-1">Oop!</strong>
      <span className="block sm:inline mr-1">Something seriously bad happened.</span>
      <span className="block sm:inline">{error}</span>
    </div>
  );
};

export default ShowError;
