import React from 'react';

const Loading = ({ size }) => {
  let dimension;
  switch(size) {
    case 'xs':
      dimension = 'w-8 h-8';
    case 'md':
      dimension = 'w-16 h-16'
    default:
      dimension = 'w-24 h-24';
  } 
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${dimension} border-b-2 border-red-300`}
      >
      </div>
    </div>
  );
};

export default Loading;
