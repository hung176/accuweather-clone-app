export const CHANGE_LANG = "CHANGE_LANG";

export const langInitialState = localStorage.getItem("lang") || "en";

export const changeLang = ({ dispatch, lang }) => {
  window.localStorage.setItem("lang", lang);
  dispatch({
    type: CHANGE_LANG,
    payload: lang,
  });
};

// reducer
export default function langReducer(state, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return action.payload;

    default:
      return state;
  }
}
