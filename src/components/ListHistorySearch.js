import React from 'react';
import { useStateValue } from '../reducers';
import HistoryLocation from './HistoryLocation';

const ListHistoryLocations = () => {
  const [{ historyLocation }, dispatch] = useStateValue();
  return (
    <div className="mx-auto py-2 max-w-4xl w-3/4 flex flex-col justify-center md:flex-row md:justify-between md:flex-wrap">
      {historyLocation.map(location => (
        <HistoryLocation key={location} location={location} />
      ))}
    </div>
  );
};

export default ListHistoryLocations;