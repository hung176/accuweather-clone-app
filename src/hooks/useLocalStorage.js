import { useState } from "react";

const composeArray = (arr, value) => {
  if (!value) {
    return arr;
  }
  if (arr.length === 0) {
    return [value];
  } 
  if (arr.length === 3 && !arr.includes(value)) {
    const filtered = arr.filter((val, index) => index < 2);
    return [value, ...filtered];
  } 
  const filtered = arr.filter(val => val !== value);
  return [value, ...filtered];
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const newValue = composeArray(storedValue, value);
      const valueToStore = value instanceof Function ? value(storedValue) : newValue;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;