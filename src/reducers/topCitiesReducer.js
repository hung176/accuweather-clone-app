import { getTopCitiesApi } from "../lib/api";
import { pickTopCitiesData } from "../ultils/pickData";

export const FETCHING_CITIES = "FETCHING_CITIES";
export const FETCHED_CITIES_SUCCESS = "FETCHED_CITIES_SUCCESS";
export const FETCHED_CITIES_ERROR = "FETCHED_CITIES_ERROR";

export const topCitiesInitialState = {
  loading: false,
  cities: [],
  error: "",
};

export const getTopCities = async ({ quantity, dispatch }) => {
  const units = window.localStorage.getItem("units") || "metric";
  const lang = window.localStorage.getItem("lang") || "en";

  try {
    dispatch({
      type: FETCHING_CITIES,
    });
    const { data } = await getTopCitiesApi(quantity, lang);
    const topCities = pickTopCitiesData(data).map((city) => ({
      ...city,
      temperature: city.temperature[units],
    }));

    dispatch({
      type: FETCHED_CITIES_SUCCESS,
      payload: topCities,
    });
  } catch (error) {
    dispatch({
      type: FETCHED_CITIES_ERROR,
      payload: error.message,
    });
  }
};

// reducer
export default function topCitiesReducer(state, action) {
  switch (action.type) {
    case FETCHING_CITIES:
      return {
        loading: true,
        cities: [],
        error: "",
      };
    case FETCHED_CITIES_SUCCESS:
      return {
        loading: false,
        cities: action.payload,
        error: "",
      };
    case FETCHED_CITIES_ERROR:
      return {
        loading: false,
        cities: [],
        error: action.payload,
      };

    default:
      return state;
  }
}
