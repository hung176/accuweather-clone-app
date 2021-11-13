import { getCurrentLocationApi } from "../lib/api";

export const INITIAL_LOCATION = 'INITIAL_LOCATION';
export const GET_HISTORY_LOCATION = 'GET_HISTORY_LOCATION';

export const historyLocationInitialState = [];

export const initialLocation = ({ dispatch }) => {

};

export const addToHistoryLocation = ({ dispatch, location}) => {
  dispatch({
    type: GET_HISTORY_LOCATION,
    payload: location
  });
};

// reducer
export default function historyLocationReducer(state, action) {
  switch (action.type) {
    case INITIAL_LOCATION:
      return [action.payload];
    
    case GET_HISTORY_LOCATION:
      let newState = [];
      const { locationKey } = action.payload;
      if (state.length) {
        newState = state.filter(lo => lo.locationKey !== locationKey);
        if (newState.length >= 3) {
          newState = [action.payload, newState[0], newState[1]];
        } else {
          newState = [action.payload, ...newState];
        }
      } else {
        newState = [action.payload]
      }
      return newState;
    
    default:
      return state;
  }
}