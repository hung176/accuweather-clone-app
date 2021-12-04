import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import { useStateValue } from "./reducers";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Setting from "./pages/Setting";
import SideDrawer from "./components/sidebar/SideDrawer";
import NotFound from "./components/NotFound";

function App() {
  const [isOpenSideDrawer, setIsOpenSideDrawer] = useState(false);
  const [{ lang, historyWeather }] = useStateValue();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div>
      <SideDrawer
        show={isOpenSideDrawer}
        showSideBar={setIsOpenSideDrawer}
        historyWeather={historyWeather[0] || {}}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isShowSideBar={isOpenSideDrawer}
              showSideBar={setIsOpenSideDrawer}
            />
          }
        />
        <Route
          path="/:country/:city/:forecastType/:cityCode"
          element={<Forecast showSideBar={setIsOpenSideDrawer} />}
        />
        <Route
          path="/setting"
          element={<Setting showSideBar={setIsOpenSideDrawer} />}
        />
        <Route
          path="*"
          element={<NotFound showSideBar={setIsOpenSideDrawer} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
