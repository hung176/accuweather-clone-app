import { getCurrentLocationApi } from "../lib/api";
import { removeSpaces } from "../ultils/removeSpaces";

export const GET_CURRENT_LOCATION = "GET_CURRENT_LOCATION";

export const currentLocaitonInitialState = {};

export const getCurrentLocation = ({ dispatch, navigate }) => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const { data } = await getCurrentLocationApi(lat, lon);
    dispatch({
      type: GET_CURRENT_LOCATION,
      payload: data,
    });

    const countryId = removeSpaces(data.Country.ID);
    const cityName = removeSpaces(data.LocalizedName);
    const locationKey = data.Key;

    navigate(`/${countryId}/${cityName}/current/${locationKey}`);
  });
};

// reducer
export default function currentLocationReducer(state, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return action.payload;

    default:
      return state;
  }
}
