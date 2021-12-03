import { getAutocompleteApi } from "../lib/api";

export const AUTOCOMPLETE_SEARCH = "AUTOCOMPLETE_SEARCH";
export const REMOVE_AUTOCOMPLETE_SEARCH = "REMOVE_AUTOCOMPLETE_SEARCH";

export const autocompleteInitialState = [];

export const getAutocompleteSearch = async ({ query, dispatch }) => {
  if (query) {
    const lang = window.localStorage.getItem("lang") || "en";
    const { data } = await getAutocompleteApi(query, lang);
    const payload = data.map((auto) => ({
      locationKey: auto.Key,
      localizedName: auto.LocalizedName,
      countryId: auto.Country.ID,
      administrativeArea: auto.AdministrativeArea,
    }));
    dispatch({
      type: AUTOCOMPLETE_SEARCH,
      payload,
    });
  }
};

// reducer
export default function autocompleteReducer(state, action) {
  switch (action.type) {
    case AUTOCOMPLETE_SEARCH:
      return action.payload;

    case REMOVE_AUTOCOMPLETE_SEARCH:
      return [];

    default:
      return state;
  }
}
