import { getCurrentLocationApi } from "../lib/api";

export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';

export const currentLocaitonInitialState = {};

export const getCurrentLocation = async ({ lat, lon, dispatch }) => {
  const { data } = await getCurrentLocationApi(lat, lon);
  dispatch({
    type: GET_CURRENT_LOCATION,
    payload: data,
  });
};

// reducer
export default function currentLocationReducer(state, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return action.payload
    
    default:
      return state;
  }
}