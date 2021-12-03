import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import mainReducer, { mainInitialState, StateProvider } from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={mainReducer} initialState={mainInitialState}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
