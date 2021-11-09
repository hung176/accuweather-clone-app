import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CurrentForeCast from './pages/CurrentForeCast';

function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/en/:country/:city/weather-forecast/:cityCode" element={<CurrentForeCast />} />
      </Routes>
    </div>
  );
}

export default App;
