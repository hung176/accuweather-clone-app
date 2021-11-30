import { getHourlyTwelveWeatherApi } from "../lib/api";
import { pickTwelveHourlyData } from "../ultils/pickData";

export const GET_TWELVE_HOURLY_SUCCESS = "GET_TWELVE_HOURLY_SUCCESS";
export const GET_TWELVE_HOURLY_ERROR = "GET_TWELVE_HOURLY_ERROR";

export const twelveHourlyInitialState = {
  loading: true,
  error: "",
  conditions: [],
};

export const getTwelveHourly = async ({ dispatch, locationKey }) => {
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en-us";

  const isMetric = units === "metric";
  try {
    const { data } = await getHourlyTwelveWeatherApi(
      locationKey,
      isMetric,
      lang
    );

    dispatch({
      type: GET_TWELVE_HOURLY_SUCCESS,
      payload: pickTwelveHourlyData(data),
    });
  } catch (error) {
    dispatch({
      type: GET_TWELVE_HOURLY_ERROR,
      payload: error.message,
    });
  }
};

export default function twelveHourlyReducer(state, action) {
  switch (action.type) {
    case GET_TWELVE_HOURLY_SUCCESS:
      return {
        loading: false,
        error: "",
        conditions: action.payload,
      };

    case GET_TWELVE_HOURLY_ERROR:
      return {
        loading: false,
        conditions: {},
        error: action.payload,
      };

    default:
      return state;
  }
}
