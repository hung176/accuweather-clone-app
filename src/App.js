import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Setting from './pages/Setting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:en/:country/:city/:forecastType/:cityCode" element={<Forecast />} />
      <Route path="/:en/setting" element={<Setting />} />
    </Routes>
  );
}

export default App;
