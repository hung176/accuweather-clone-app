import axios from './axios';
import { apiKey } from '../consts/api';

export const getCurrentLocationApi = (latitude, longtitude) => axios.get(`/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longtitude}`);

export const getTopCitiesApi = (quantity) => axios.get(`/currentconditions/v1/topcities/${quantity}?apikey=${apiKey}`);