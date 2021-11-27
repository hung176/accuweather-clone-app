import React from 'react';
import Nav from './common/Nav';
import ShowError from './common/ShowError';

const NotFound = ({ showSideBar }) => {
  return (
    <div>
      <Nav showSideBar={showSideBar} />
      <ShowError error="Not found" />
    </div>
  );
};

export default NotFound;
