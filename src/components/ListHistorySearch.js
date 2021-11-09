import React from 'react';
import HistoryLocation from './HistoryLocation';

const ListHistoryLocations = () => {

  const historyLocation = ['Hanoi, VietNam', 'BacNinh, VietNam', 'fsfsafsfsfsdf'];
  return (
    <div className="mx-auto py-2 max-w-4xl w-3/4 flex justify-around items-center flex-wrap">
      {historyLocation.map(location => (
        <HistoryLocation location={location} />
      ))}
    </div>
  );
};

export default ListHistoryLocations;