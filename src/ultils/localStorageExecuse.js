export const setLocalStorageItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const getLocalStorageItems = () => {
  const localStorageItems = Object.keys(localStorage)
  return localStorageItems;
};

export const hasLocationsLocalStorage = () => {
  return Object.keys(localStorage).includes('historyLocations');
};

export const addToLocalStorage = (item) => {
  const historyLocations = localStorage.getItem('historyLocations');
  if (!historyLocations) {
    const locations = JSON.stringify([item]);
    localStorage.setItem('historyLocations', locations);
  } else {
    let locations = JSON.parse(historyLocations);
    // localStorage.removeItem('historyLocations');
    locations = [item, ...locations];
    localStorage.setItem('historyLocations', locations);
  }
  console.log(localStorage)
  return localStorage;
};

