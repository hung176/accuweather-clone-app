
export const CHANGE_UNITS = 'CHANGE_UNITS';

export const unitsInitialState = 'metric';

export const changeUnits = ({ dispatch, units }) => {
  window.localStorage.setItem('units', units);
  dispatch({
    type: CHANGE_UNITS,
    payload: units
  });
};

// reducer
export default function unitsReducer(state, action) {
  switch (action.type) {
    case CHANGE_UNITS:
      return action.payload;
    
    default:
      return state;
  }
}