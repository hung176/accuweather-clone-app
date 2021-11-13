import { getCurrentWeatherApi } from "../lib/api";
import { pickCurrentWeatherData } from '../ultils/pickData';

export const GET_CURRENT_WEATHER_SUCCESS = 'GET_CURRENT_WEATHER_SUCCESS';
export const GET_CURRENT_WEATHER_LOADING = 'GET_CURRENT_WEATHER_LOADING';
export const GET_CURRENT_WEATHER_ERROR = 'GET_CURRENT_WEATHER_ERROR';
export const GET_ONE_HOURLY_WEATHER = 'GET_ONE_HOURLY_WEATHER';
export const GET_TWELVE_HOURLY_WEATHER = 'GET_TWELVE_HOURLY_WEATHER';
export const GET_ONE_DAILY_WEATHER = 'GET_ONE_DAILY_WEATHER';
export const GET_FIVE_DAILY_WEATHER = 'GET_FIVE_DAILY_WEATHER';

export const currentWeatherInitialState = {
  loading: true,
  error: '',
  conditions: {},
};

export const getCurrentWeather = async ({ dispatch, locationKey, units }) => {

  try {
    const { data } = await getCurrentWeatherApi(locationKey);
    const pick = pickCurrentWeatherData(data);
    
    let payload = {
      ...pick,
      temperature: pick.temperature[units],
      realFeel: pick.realFeel[units],
      realFeelShade: pick.realFeelShade[units],
      wind: pick.wind[units],
      windGust: pick.windGust[units],
      dewPoint: pick.dewPoint[units],
      pressure: pick.pressure[units],
      visibility: pick.visibility[units],
      cloudCeiling: pick.cloudCeiling[units]
    };
    
    dispatch({
      type: GET_CURRENT_WEATHER_SUCCESS,
      payload,
    });

  } catch (error) {
    dispatch({
      type: GET_CURRENT_WEATHER_ERROR,
      payload: error.message,
    });
  }
};

// export const getDailyFiveWeather = async ({ dispatch, locationKey }) => {
//   const { data } = await getDailyFiveWeatherApi(locationKey);

//   dispatch({
//     type: GET_FIVE_DAILY_WEATHER,
//     payload: data
//   });
// };

// export const getHourlyOneWeather = async ({ dispatch, locationKey }) => {
//   const { data } = await getHourlyOneWeatherApi(locationKey);

//   dispatch({
//     type: GET_ONE_HOURLY_WEATHER,
//     payload: data
//   });
// };

// export const getHourlyTwelveWeather = async ({ dispatch, locationKey }) => {
//   const { data } = await getHourlyTwelveWeatherApi(locationKey);

//   dispatch({
//     type: GET_TWELVE_HOURLY_WEATHER,
//     payload: data
//   });
// };

// reducer
export default function currentWeatherReducer(state, action) {
  switch (action.type) {
    case GET_CURRENT_WEATHER_SUCCESS:
      return {
        loading: false,
        error: '',
        conditions: action.payload
      };

    case GET_CURRENT_WEATHER_ERROR:
      return {
        loading: false,
        conditions: {},
        error: action.payload
      }

    default:
      return state;
  }
}