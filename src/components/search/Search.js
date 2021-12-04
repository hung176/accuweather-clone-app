import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import debounce from "lodash.debounce";
import { getCurrentLocation } from "../../reducers/currentLocationReducer";
import { getAutocompleteSearch } from "../../reducers/autocompleteReducer";
import { REMOVE_AUTOCOMPLETE_SEARCH } from "../../reducers/autocompleteReducer";
import { useStateValue } from "../../reducers";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import AutoComplete from "./AutoComplete";
import RecentSearch from "./RecentSearch ";
import { removeSpaces } from "../../ultils/removeSpaces";
import { useTranslation } from "react-i18next";

const Search = ({ small, showSideBar }) => {
  const { t } = useTranslation();

  const [border, setBorder] = React.useState("rounded-md");
  const [showOption, setShowOption] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const [{ historyWeather }, dispatch] = useStateValue();

  const onFocus = (e) => {
    setBorder("rounded-t-md border-b-2 border-red-400");
    setShowOption(true);
  };
  const onBlur = (e) => {
    setBorder("rounded-md");
    setShowOption(false);
  };

  const handleCurrentLocation = () => {
    showSideBar(false);
    getCurrentLocation({ dispatch, navigate });
  };

  const debounceAutocomplete = useCallback(
    debounce(
      (newValue) => getAutocompleteSearch({ query: newValue, dispatch }),
      1000
    ),
    []
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debounceAutocomplete(e.target.value);
  };

  const goToCitySearched = (location) => {
    showSideBar(false);
    const { countryId, localizedName, locationKey } = location;
    navigate(
      `/${removeSpaces(countryId)}/${removeSpaces(
        localizedName
      )}/current/${locationKey}`
    );
  };

  return (
    <div className="w-full relative text-gray-600">
      <div
        className={`bg-white ${
          small ? "h-11" : ""
        } flex items-center ${border} py-2 px-4 `}
      >
        <SearchIcon className="w-8 h-8 mr-1" />
        <input
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          placeholder={t("searchLocation")}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
          className={`w-full p-2 ${
            small ? "text-sm" : "text-2xl"
          } focus:outline-none`}
        />
        {query && (
          <XIcon
            className="w-8 h-8 text-gray-600"
            onClick={() => {
              dispatch({
                type: REMOVE_AUTOCOMPLETE_SEARCH,
              });
              setQuery("");
            }}
          />
        )}
      </div>

      {showOption && (
        <div className="rounded-b-md shadow-2xl bg-white w-full flex flex-col items-center text-gray-400 absolute z-40">
          <div
            className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-gray-200 hover:text-gray-600"
            onMouseDown={handleCurrentLocation}
          >
            <LocationMarkerIcon className="w-6 h-6 text-red-400 mr-2" />
            <span className={`font-light`}>{t("currentLocation")}</span>
          </div>

          {query && <AutoComplete goToCitySearched={goToCitySearched} />}

          {!query && !isHomePage && (
            <div className="w-full">
              <div className="px-2 font-semibold text-lg">Recent</div>

              <div className="border-t-2 border-gray-200">
                {historyWeather.map((recentLocation) => {
                  const {
                    locationKey,
                    cityName,
                    country,
                    weatherIcon,
                    temperature,
                  } = recentLocation;
                  return (
                    <div
                      className="mt-2 p-2 hover:bg-gray-300 cursor-pointer"
                      key={locationKey}
                      onMouseDown={() =>
                        goToCitySearched({
                          locationKey,
                          localizedName: cityName,
                          countryId: country.id,
                        })
                      }
                    >
                      <RecentSearch
                        cityName={cityName}
                        countryName={country.name}
                        weatherIcon={weatherIcon}
                        temperature={temperature}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
