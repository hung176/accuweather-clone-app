import { getFiveDayWeatherApi } from "../lib/api";
import { pickFiveDayData } from "../ultils/pickData";

export const GET_FIVE_DAY_SUCCESS = "GET_FIVE_DAY_SUCCESS";
export const GET_FIVE_DAY_ERROR = "GET_FIVE_DAY_ERROR";

export const fiveDayInitialState = {
  loading: true,
  error: "",
  conditions: [],
};

export const getFiveDay = async ({ dispatch, locationKey }) => {
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en-us";

  const isMetric = units === "metric";
  try {
    const { data } = await getFiveDayWeatherApi(locationKey, isMetric, lang);

    dispatch({
      type: GET_FIVE_DAY_SUCCESS,
      payload: pickFiveDayData(data),
    });
  } catch (error) {
    dispatch({
      type: GET_FIVE_DAY_ERROR,
      payload: error.message,
    });
  }
};

export default function fiveDayReducer(state, action) {
  switch (action.type) {
    case GET_FIVE_DAY_SUCCESS:
      return {
        loading: false,
        error: "",
        conditions: action.payload,
      };

    case GET_FIVE_DAY_ERROR:
      return {
        loading: false,
        conditions: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
