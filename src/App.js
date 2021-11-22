import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Forecast from './pages/Forecast';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:en/:country/:city/:forecastType/:cityCode" element={<Forecast />} />
    </Routes>
  );
}

export default App;
