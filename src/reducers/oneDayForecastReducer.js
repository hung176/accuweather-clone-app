import { getOneDayForecastApi } from "../lib/api";
import { pickOneDayForecastData } from "../ultils/pickData";

export const GET_ONE_DAY_FORECAST_SUCCESS = "GET_ONE_DAY_FORECAST_SUCCESS";
export const GET_ONE_DAY_FORECAST_ERROR = "GET_ONE_DAY_FORECAST_ERROR";

export const oneDayForecastInitialState = {
  loading: true,
  error: "",
  conditions: {},
};

export const getOneDayForecast = async ({ dispatch, locationKey }) => {
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en-us";

  const isMetric = units === "metric";
  const { data } = await getOneDayForecastApi(locationKey, isMetric, lang);

  dispatch({
    type: GET_ONE_DAY_FORECAST_SUCCESS,
    payload: pickOneDayForecastData(data),
  });
};

export default function oneDayForecastReducer(state, action) {
  switch (action.type) {
    case GET_ONE_DAY_FORECAST_SUCCESS:
      return {
        loading: false,
        error: "",
        conditions: action.payload,
      };

    case GET_ONE_DAY_FORECAST_ERROR:
      return {
        loading: false,
        conditions: {},
        error: action.payload,
      };

    default:
      return state;
  }
}
