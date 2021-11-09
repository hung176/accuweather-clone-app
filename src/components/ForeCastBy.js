import React from 'react';

export default function ForeCastBy({ foreCast }) {
  return (
    <div className={`text-center py-4 ${foreCast === 'today' ? 'pr-4' : 'px-6'} cursor-pointer text-gray-500 font-medium`}>
      {foreCast.toUpperCase()}
    </div>
  )
}
