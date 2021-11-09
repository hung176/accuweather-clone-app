import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import ListForeCastBy from '../components/ListForeCastBy';

const CurrentForeCast = () => {
  const params = useParams();

  return (
    <div className="bg-gray-200">
      <Nav />
      <ListForeCastBy />
    </div>
  );
};

export default CurrentForeCast;
