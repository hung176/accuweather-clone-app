import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Forecast from './pages/Forecast';

function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/en/:country/:city/:forecastType/:cityCode" element={<Forecast />} />
      </Routes>
    </div>
  );
}

export default App;
